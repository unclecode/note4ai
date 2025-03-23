# Product Requirements Document: Note4AI

## Product Overview
Note4AI is a minimalist, elegant note-taking Progressive Web Application (PWA) built with vanilla JavaScript and the TipTap editor. The application features a dark-themed, distraction-free interface inspired by Apple Notes, with a single-page approach rather than a folder/file structure. Notes are stored as blocks in IndexedDB for local persistence.

## Technical Stack
- **Core Language**: Vanilla JavaScript (no framework)
- **Editor**: TipTap (framework-agnostic version)
- **CSS Framework**: TailwindCSS
- **Build Tool**: Vite.js
- **Storage**: IndexedDB
- **Deployment**: GitHub Pages

## Key Features
1. **Markdown-Aware Single-Page Editor**
   - On-the-fly markdown detection and formatting
   - Code block creation with syntax highlighting
   - No folder hierarchy - just one continuous editing experience
   - TipTap integration for smooth, reactive editing

2. **Dark Theme UI**
   - Zen-style dark theme throughout the application
   - Minimalist interface with essential controls only
   - Responsive design for all device sizes

3. **Local Data Persistence**
   - IndexedDB storage with block-based data structure
   - Automatic saving of content changes

4. **PWA Features**
   - Offline functionality
   - Version number display in UI
   - Service worker debugging controls

## Development Workflow
- Development on "next" branch
- Release versions on dedicated version branches
- Production on "main" branch (auto-deployed to GitHub Pages)
- Username: unclecode

## Design Philosophy
- Clean, non-bloated code
- Balanced component architecture
- Room for future expansion without complexity
- Dark, minimalist aesthetic with no distractions

## Testing Requirements
- Local Node.js test server for development
- Comprehensive console error monitoring
- Cross-device testing for responsive design
- PWA functionality verification

Note4AI aims to provide a distraction-free, Notion-like editing experience using vanilla JavaScript and TipTap, focusing on simplicity, performance, and aesthetics.


# TipTap Document: Vanilla JavaScript

Are you using plain JavaScript or a framework that isn't listed? No worries, we provide everything you need.

> **Hint**  
> If you don't use a bundler like Webpack or Rollup, please follow the [CD guide](#) instead. Since Tiptap is built in a modular way, you will need to use `<script type="module">` in your HTML to get our CDN imports working.

## Install dependencies

For the following example, you will need `@tiptap` (the actual editor), `@tiptap/pm` (the ProseMirror library), and `@tiptap/starter-kit`. The StarterKit doesn't include all extensions, only the most common ones.

```bash
npm install @tiptap/core @tap/pm @tiptap/starter-kit
```

## Add markup

Add the following HTML where you'd like to mount the editor:

```html
<div class="element"></div>
```

## Initialize the editor

Everything is in place, so let's set up the. Add the following code to your JavaScript:

```javascript
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

new Editor({
  element: document.querySelector('.element'),
  extensions: [StarterKit],
 : '<p>Hello World!</p>',
})
```

Open your project in the browser to see Tiptap in action. Good work!


# TipTap Document: 
This is the list of topic, in any step if you need ask me to share with you the URL:
- **GETTING STARTED**
  - Overview
  - Install
  - Configure
  - Styling
    - Custom menus

- **EXTENSIONS**
  - Overview
  - Nodes
  - Marks
  - Functionality
  - Custom extensions

-CORE CONCEPTS**
  - Introduction
  - Extensions
  - Nodes and Marks
  - Schema
  - Keyboard shortcuts
  - ProseMirror

- **API**
  - Editor instance
  - Commands
  - Utilities
  - Node Positions
 - Events

- **RESOURCES**
  - Guides
  - Pro license