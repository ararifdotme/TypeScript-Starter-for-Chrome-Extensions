# TypeScript Starter for Chrome Extensions

A boilerplate Chrome extension built with TypeScript and Webpack. 

## Features
- **Manifest V3**: Uses the latest Chrome Extensions manifest version.
- **TypeScript**: All scripts are written in TypeScript for type safety and maintainability.
- **Modular Structure**: Organized into background, content, popup scripts, and services.
- **Task Scheduler**: Includes a simple scheduler service for running periodic tasks.
- **Popup UI**: Simple popup with a counter example.
- **Options Page**: Placeholder for future options.

## Project Structure
```
├── package.json
├── tsconfig.json
├── webpack.config.js
├── src/
│   ├── manifest.json
│   ├── html/
│   │   ├── options.html
│   │   └── popup.html
│   │   └── ... Other html
│   ├── icons/
│   │   ├── icon.png
│   │   ├── icon128.png
│   │   ├── icon16.png
│   │   └── icon48.png
│   ├── scripts/
│   │   ├── background.ts
│   │   ├── content.ts
│   │   └── popup.ts
│   │   └── ... Other scripts
│   └── services/
│       └── scheduler.ts
│       └── ... Other services
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd typescript-chrome-extension-boilerplate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To build the extension in development mode (with source maps and watch):
```bash
npm run dev
```

### Production Build
To build the extension for production:
```bash
npm run build
```

### Load the Extension in Chrome
1. Run the build (see above).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the `dist` folder.

## Scripts Overview
- **background.ts**: Placeholder for background logic (runs as a service worker).
- **content.ts**: Injected into all pages, uses the Scheduler service.
- **popup.ts**: Handles popup UI logic (simple counter example).
- **scheduler.ts**: Provides a simple task scheduler for periodic tasks.

## Customization
- Add your own logic to `background.ts`, `content.ts`, and `popup.ts` as needed.
- Extend the options page (`options.html`) for user settings.
- Update `manifest.json` for permissions and extension metadata.

## License
MIT
