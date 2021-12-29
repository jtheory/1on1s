import { Cat } from '../App'

// TODO: generate this from the cats and md files (get topic name from first h1)
//       and write / read as JSON

// cheating for now: we'll embed the md into the obj when it's generated
const sampleMd = `
# So! This is a topic's title

One paragraph might go here; with some text blah blah blah

Another paragraph

## Let's talk about h2s

We could indeed. Let's put a quote here:

> Multiline quote, even?  
Yes BUT only  
if we have two space at the end of lines

## And one more h2?

Great.

* Here's an
* unordered
* list with a [link in it](https://robwhelan.com "Link to, uh.")

## What about images?

These will take more work to style well, I guess, but let's see...

![Image alt text](logo512.png "Image title text")

_Nice?_ **Nice.**

1. I guess
1. we can also do
1. an ordered list

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
`

const catsAndTopics: Cat[] = [
  {
    title: 'Everything is fine (really)',
    topics: [
      { name: 'Making sure they know', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: "Let's log celebrations", path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
    ],
  },
  {
    title: `Problems I don't know how to talk about`,
    topics: [
      { name: 'I just found a long-standing problem', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: 'I forgot to follow up', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: 'People are annoyed', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: 'People are upset/angry', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: 'Worried you are not right for this job', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
      { name: 'Are you planning to quit?', path: 'sample-cat-slug/sample-topic-slug.md', md: sampleMd },
    ],
  },
]

export default catsAndTopics
