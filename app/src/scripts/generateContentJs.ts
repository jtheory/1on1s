import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { Cat, Topic } from '../App'
import catTitlesAndSlugs from '../content/cat-titles-and-slugs'

const catDir = '../content/cats'
const targetFile = '../__generated__/content.json'

/**
 * Load cat-titles-and-slugs plus MD content (split out h1) into one big JSON
 */
const run = async () => {
  const catsPath = join(__dirname, catDir)
  const expectedSlugs = catTitlesAndSlugs.map((c) => c.slug)
  const foundSlugs = readdirSync(catsPath)

  // be STRICT about cats + slugs matching content dirs exactly
  enforceCatDirsFound(expectedSlugs, foundSlugs)

  const fullData = catTitlesAndSlugs.map((c) => {
    const topicFilenames = readdirSync(join(catsPath, c.slug))
    if (topicFilenames.length < 1) throw new Error(`No topics in category ${c.slug}`)

    const topics = topicFilenames.map((topicFilename) => loadTopic(catsPath, c.slug, topicFilename))
    const cat: Cat = { title: c.title, slug: c.slug, topics }
    return cat
  })

  // write it out (pretty! it'll get minified later)
  writeFileSync(join(__dirname, targetFile), JSON.stringify(fullData, null, 2), 'utf-8')

  console.log(`Wrote new data file to ${targetFile}`)
  process.exit()
}

const loadTopic = (catsPath: string, catSlug: string, topicFilename: string): Topic => {
  if (!topicFilename.endsWith('.md')) throw new Error(`Topic file doesn't end in .md: ${topicFilename}`)

  const topicSlug = topicFilename.replace(/\.md$/i, '')
  const mdContent = readFileSync(join(catsPath, catSlug, topicFilename), 'utf-8')
  const topicPath = join(catSlug, topicFilename)

  const maybeSplitMd = trySplitOutMdH1(mdContent)
  if (!maybeSplitMd) throw new Error(`No H1 found in ${topicPath}`)
  const splitMd = maybeSplitMd

  return {
    name: splitMd.h1,
    path: `/${catSlug}/${topicSlug}`,
    md: splitMd.content,
  }
}

const trySplitOutMdH1 = (mdDoc: string) => {
  const matched = mdDoc.match(/^# (.*)$/m)
  if (!matched) return null

  const h1FullLine = matched[0]
  const h1Text = matched[1]

  return {
    h1: h1Text,
    content: mdDoc.replace(h1FullLine, '').trimStart(),
  }
}

const enforceCatDirsFound = (expectedSlugs: string[], foundSlugs: string[]) => {
  if (foundSlugs.length !== expectedSlugs.length) {
    throw new Error(`cat-titles-and-slugs has ${expectedSlugs.length} but content/cats has ${foundSlugs.length}`)
  }

  const moreSlugsFound = foundSlugs.filter((s) => !expectedSlugs.includes(s))
  const moreSlugsExpected = expectedSlugs.filter((s) => !foundSlugs.includes(s))
  if (moreSlugsFound.length + moreSlugsExpected.length !== 0) {
    throw new Error(`Found extra slugs: ${moreSlugsFound} or expected more slugs ${moreSlugsExpected}`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
