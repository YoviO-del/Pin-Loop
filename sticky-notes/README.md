# Pin-Loop

A Chrome extension for creating and managing sticky notes on any webpage.

## Overview

Pin-Loop is a React-based Chrome extension that allows users to create, edit, and manage sticky notes directly on any website. Notes persist in localStorage and can be accessed across browsing sessions.

## Features

- **Create Notes**: Add new sticky notes to any webpage
- **Drag & Drop**: Position notes anywhere using drag-and-drop
- **Edit & Delete**: Modify or remove existing notes
- **Persistent Storage**: Notes are saved to localStorage and persist across sessions
- **Multi-Note View**: View all notes on the front page
- **Single Note View**: Focus on individual notes with detailed editing

## Project Structure

```
sticky-notes/
├── public/
│   └── manifest.json       # Chrome extension manifest
├── src/
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point for popup UI
│   ├── content.jsx         # Entry point for content script
│   ├── App.css             # Main app styles
│   ├── index.css           # Global styles
│   ├── front-note-page/    # Multi-note view components
│   │   ├── FrontPage.jsx
│   │   ├── Notes.jsx
│   │   ├── MultipleStickyNotes.jsx
│   │   ├── StickyNote.jsx
│   │   ├── DraggableNote.jsx
│   │   ├── Footer.jsx
│   │   └── opera.jsx
│   └── single-note-page/   # Single note view components
│       ├── AtomicNote.jsx
│       ├── SingleNoteText.jsx
│       └── NoteInput.jsx
├── index.html              # Popup HTML entry point
├── vite.config.js          # Vite configuration (multi-entry build)
└── package.json
```

## Tech Stack

- **React 19** — UI framework
- **React Router 7** — Routing (HashRouter for extension compatibility)
- **@dnd-kit/core** — Drag and drop functionality
- **Vite 7** — Build tool
- **Chrome Extension API** — Extension platform

## Installation

```bash
cd sticky-notes
npm install
```

## Development

```bash
npm run dev
```

Runs the Vite dev server for local development.

## Build

```bash
npm run build
```

Builds the production extension to the `dist/` folder.

## Loading the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `dist/` folder from this project

## Extension Architecture

This project uses a **multi-entry Vite build** with two separate entry points:

| Entry | File | Purpose |
|-------|------|---------|
| `main` | `index.html` | Popup UI — the interface when clicking the extension icon |
| `content` | `src/content.jsx` | Content script — injected into webpages to render sticky notes |

The content script creates a fixed-position overlay (`#task-pin-container`) that covers the viewport but allows click-through to the underlying page, enabling interactive sticky notes on any website.

## Routes

- `/` — FrontPage (multi-note view)
- `/note/:id` — AtomicNote (single note editing)