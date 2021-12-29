import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { Cat, Topic } from '../App'
import catTitlesAndSlugs from '../content/cat-titles-and-slugs'

const catDir = '../content/cats'
const targetFile = '../__generated__/content.json'

/**
 * Load cat-titles-and-slugs plus MD content into one big JS
 * (TODO: JSON? but multiline strings may get weird)
 */
const run = async () => {
  const catsPath = join(__dirname, catDir)
  const expectedSlugs = catTitlesAndSlugs.map((c) => c.slug)
  const foundSlugs = readdirSync(catsPath)

  // be STRICT about cats + slugs matching content dirs exactly
  enforceCatDirsFound(expectedSlugs, foundSlugs)

  const fullData = catTitlesAndSlugs.map((c) => {
    const topicFilenames = readdirSync(join(catsPath, c.slug))
    const topics = topicFilenames.map((topicFilename) => loadTopic(catsPath, c.slug, topicFilename))
    const cat: Cat = { title: c.title, topics }
    return cat
  })

  console.log(`okay cat ${JSON.stringify(fullData, null, 2)}`)

  // write it out
  writeFileSync(join(__dirname, targetFile), JSON.stringify(fullData), 'utf-8')

  console.log(`Wrote new data file to ${targetFile}`)
  process.exit()
}

const loadTopic = (catsPath: string, catSlug: string, topicFilename: string): Topic => {
  if (!topicFilename.endsWith('.md')) throw new Error(`Topic file doesn't end in .md: ${topicFilename}`)

  const mdContent = readFileSync(join(catsPath, catSlug, topicFilename), 'utf-8')
  const topicPath = join(catSlug, topicFilename)

  const maybeH1 = tryExtractMdH1(mdContent)
  if (!maybeH1) throw new Error(`No H1 found in ${topicPath}`)
  const h1 = maybeH1

  return {
    path: topicPath,
    name: h1,
    md: mdContent,
  }
}

const tryExtractMdH1 = (md: string) => {
  const matched = md.match(/^# (.*)$/m)
  const captureH1 = matched?.at(1)
  return captureH1
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
