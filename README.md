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
sticky-notes/
├── public/
│ └── manifest.json # Chrome extension manifest
├── src/
│ ├── App.jsx # Main app with routing
│ ├── main.jsx # Entry point for popup UI
│ ├── content.jsx # Entry point for content script (injected into pages)
│ ├── App.css # Main app styles
│ ├── index.css # Global styles
│ ├── front-note-page/ # Multi-note view components
│ │ ├── FrontPage.jsx
│ │ ├── Notes.jsx
│ │ ├── MultipleStickyNotes.jsx
│ │ ├── StickyNote.jsx
│ │ ├── DraggableNote.jsx
│ │ ├── Footer.jsx
│ │ └── opera.jsx
│ └── single-note-page/ # Single note view components
│ ├── AtomicNote.jsx
│ ├── SingleNoteText.jsx
│ └── NoteInput.jsx
├── index.html # Popup HTML entry point
├── vite.config.js # Vite configuration (multi-entry build)
└── package.json


## Tech Stack

- **React 19** — UI framework
- **React Router 7** — Routing (HashRouter for extension compatibility)
- **@dnd-kit/core** — Drag and drop functionality
- **Vite 7** — Build tool
- **Chrome Extension API** — Extension platform


<img width="404" height="222" alt="image" src="https://github.com/user-attachments/assets/d325d4dc-1614-4d2c-9aec-1f26b30a08a8" />


## Installation

```bash
npm install
npm run build 

Loading the Extension
Open Chrome and navigate to chrome://extensions/
Enable Developer mode (toggle in top-right)
<img width="1913" height="189" alt="image" src="https://github.com/user-attachments/assets/30d0085e-b8e7-4eb3-bd6b-f874dfa6d950" />

Click Load unpacked
Select the dist/ folder from this project
Extension Architecture
This project uses a multi-entry Vite build with two separate entry points:

Entry	File	Purpose
main	index.html	Popup UI — the interface when clicking the extension icon
content	src/content.jsx	Content script — injected into webpages to render sticky notes
The content script creates a fixed-position overlay (#task-pin-container) that covers the viewport but allows click-through to the underlying page, enabling interactive sticky notes on any website.

Routes
/ — FrontPage (multi-note view)
/note/:id — AtomicNote (single note editing)

<img width="404" height="222" alt="image" src="https://github.com/user-attachments/assets/7ae9d8f9-f4e5-4978-bb2c-878c391c8733" />

