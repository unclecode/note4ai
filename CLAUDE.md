# Note4AI Project

## Project Vision
Note4AI is a minimalist note-taking PWA built with vanilla JavaScript and TipTap editor for the age of AI. It eliminates the need for organizing, creating folders, and assigning tags. The goal is to create a distraction-free interface where users can simply write, drop, and talk without worrying about structure.

## Technical Stack
- Vanilla JavaScript
- TipTap editor for rich text editing
- TailwindCSS for styling
- Vite.js as build tool
- IndexedDB for local data persistence
- GitHub Pages for deployment

## Current Features
- Markdown-aware single-page editor with TipTap
- Dark/light theme toggle with system preference detection
- Local data persistence with IndexedDB
- Header and status bar with minimalist design
- Zen mode for distraction-free writing (toggle with button or Esc key)
- Mobile responsive design with touch-friendly controls
- Automatic content saving

## Implementation Details
- Single page architecture with no folder hierarchies
- Block-based content storage in IndexedDB
- Theme switching with proper CSS variables and transitions
- Zen mode with multiple exit options (button, Esc key, double-tap, bottom indicator)
- Mobile-optimized interface with proper touch handling
- Responsive design that works on all device sizes

## Future Plans
- Small language models to handle organizational structures
- Semantic search functionality for finding notes
- Integration with Crawl4ai to access web information
- Text-to-speech and speech-to-text capabilities
- Image processing and management
- Device syncing through peer-to-peer networking
- Direct sharing and collaboration without relying on servers
- Progressive Web App enhancements for offline use

## Development Workflow
- Development happens on "next" branch
- Release versions on dedicated version branches
- Production on "main" branch
- GitHub Pages deployment from "gh-pages" branch (automated)
- Author is "unclecode" (creator of Crawl4ai)

## Commands
- Setup: `npm install`
- Development: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy: `npm run deploy`

## File Structure
- `/index.html` - Main HTML file
- `/src/js/main.js` - Main JavaScript entry point
- `/src/js/database.js` - IndexedDB database handling
- `/src/js/theme.js` - Theme toggle functionality
- `/src/js/zenMode.js` - Zen mode implementation
- `/src/css/style.css` - Custom CSS styles
- `/vite.config.js` - Vite configuration

## Deployment
- The application is deployed to GitHub Pages
- Live URL: https://unclecode.github.io/note4ai/
- Deployment uses the gh-pages npm package
- Deployment command: `npm run deploy`
- The gh-pages branch is automatically updated during deployment

## Design Philosophy
- Clean, non-bloated code
- Balanced component architecture
- Dark, minimalist aesthetic with focus on content
- "Just write" mentality - no complex organization required
- Distraction-free environment

## License
- Apache License 2.0

## Issues Fixed
- Fixed the color consistency between components
- Fixed light/dark theme toggle to properly apply theme
- Fixed vertical scroll issues with proper container styles
- Fixed zen mode exit issues on mobile devices
- Enhanced mobile responsiveness and touch handling
- Added better indicators and interactions for mobile users

## Next Development Steps
1. Improve markdown syntax detection and formatting
2. Add code block support with syntax highlighting
3. Begin integration with small language models
4. Implement semantic search functionality
5. Create basic connection to Crawl4ai API
6. Add basic text-to-speech functionality
7. Begin work on peer-to-peer syncing capabilities