# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React single-page application providing 1-on-1 conversation topics and scripts for technical managers. Content is stored as Markdown files organized by category, allowing non-technical contributors to add topics via pull requests. Auto-deployed to Netlify.

## Commands

All commands must be run from the `./app` directory:

```bash
cd app
```

### Development
- `yarn start` - Start dev server at http://localhost:3000
- `yarn test` - Run tests in watch mode
- `yarn build` - Production build to ./build folder

### Content Generation
- `yarn generate` - Process markdown content into JSON (required after content changes)
- `yarn generateAndBuild` - Generate content + production build

## Architecture

### Content System

Content is managed through a build-time generation process:

1. **Source**: Markdown files in `app/src/content/cats/{category-slug}/{topic-slug}.md`
2. **Configuration**: `app/src/content/cat-titles-and-slugs.ts` defines category titles and slugs
3. **Generation**: `app/src/scripts/generateContentJs.ts` processes content
4. **Output**: `app/src/__generated__/content.json` (consumed by React app)

**Critical constraint**: Category directories in `cats/` must exactly match slugs defined in `cat-titles-and-slugs.ts`. Build fails otherwise.

### Content Structure

Each topic markdown file:
- Must have exactly one top-level heading (`# Title`)
- Heading becomes the topic name in the UI
- Remaining content is stored as markdown for rendering

Categories are rendered as accordions, topics as expandable items with markdown content.

### Adding/Editing Content

**Add new topic**: Create `.md` file in existing category directory with `# Heading`

**Add new category**:
1. Add entry to `cat-titles-and-slugs.ts`
2. Create matching directory in `app/src/content/cats/`
3. Add at least one topic markdown file

**After content changes**: Run `yarn generate` to rebuild `content.json`

## Tech Stack

- React 17 + TypeScript
- react-router-dom v6 for routing
- Create React App (not ejected)
- markdown-to-jsx for content rendering
- Node v17.3.0 (see `.nvmrc`)
- yarn package manager
