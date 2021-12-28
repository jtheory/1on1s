import { Cat } from '../App'

const catsAndTopics: Cat[] = [
  {
    title: 'Everything is fine (really)',
    topics: [
      { name: 'Making sure they know', path: './everything-is-fine-really/making-sure.md' },
      { name: "Let's log celebrations", path: './everything-is-fine-really/lets-log-celebrations.md' },
    ],
  },
  {
    title: `Problems I don't know how to talk about`,
    topics: [
      { name: 'I just found a long-standing problem', path: './everything-is-fine-really/do-they-know.md' },
      { name: 'I forgot to follow up', path: './everything-is-fine-really/do-they-know.md' },
      { name: 'People are annoyed', path: './everything-is-fine-really/do-they-know.md' },
      { name: 'People are upset/angry', path: './everything-is-fine-really/do-they-know.md' },
      { name: 'Worried you are not right for this job', path: './everything-is-fine-really/do-they-know.md' },
      { name: 'Are you planning to quit?', path: './everything-is-fine-really/do-they-know.md' },
    ],
  },
]

export default catsAndTopics
