# 🎵 Album Collection 🎵 — INFT 2202 Capstone SPA

A multi-view React single-page application for managing a personal album collection. Built as the capstone project for INFT 2202 Web Development.

**Live Site:** https://mathuranc.github.io/INFT2202-CAPSTONE/

**Repository:** https://github.com/mathuranc/INFT2202-CAPSTONE

---

## Project Overview

Album Collection lets users browse, search, filter, sort, add, edit, and delete music albums. State is persisted in `localStorage` so data survives page refreshes. The app demonstrates modular React architecture using Context API, custom hooks, React Router v6, and Bootstrap 5.

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm

### Install & Run Locally

```bash
git clone https://github.com/mathuranc/INFT2202-CAPSTONE.git
cd INFT2202-CAPSTONE
npm install
npm run dev
```

### Build & Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Routing Map

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomeView` | Landing page with links to list and create |
| `/list` | `ListView` | Browsable, filterable, sortable album grid |
| `/item/:id` | `DetailView` | Read-only detail page for a single album |
| `/new` | `CreateEditView` | Form to add a new album |
| `/edit/:id` | `CreateEditView` | Pre-filled form to edit an existing album |
| `*` | — | 404 Not Found fallback |

> HashRouter is used for GitHub Pages compatibility — all routes are prefixed with `#`.

---

## Data Model

Each album record contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Auto-generated UUID |
| `title` | string | Album title |
| `artist` | string | Artist or band name |
| `genre` | string | Music genre (e.g. Rock, Jazz, Pop) |
| `year` | number | Release year (1900 – present) |
| `rating` | number | Personal rating out of 10 (1–10) |
| `notes` | string | Optional personal notes |

---

## Storage

- **Key:** `a4_items`
- **Mechanism:** `localStorage`
- Data is serialized with `JSON.stringify` on write and safely parsed with `JSON.parse` on mount. Invalid or missing data falls back to an empty array.

---

## Project Structure

```
src/
├── components/
│   ├── ItemCard.jsx       # Album card with view/edit/delete actions
│   └── ItemForm.jsx       # Controlled form with validation
├── context/
│   └── ItemsContext.jsx   # Context provider and useItemsContext hook
├── hooks/
│   └── useItems.js        # Custom hook for state, filtering, sorting, persistence
├── layout/
│   └── Layout.jsx         # Persistent header and navigation
└── views/
    ├── HomeView.jsx        # Landing page
    ├── ListView.jsx        # Filtered and sorted album grid
    ├── DetailView.jsx      # Single album detail page
    └── CreateEditView.jsx  # Add and edit form view
```

---

## Features

- Search albums by title
- Filter by genre and year range
- Sort by title, artist, year, or rating (ascending/descending)
- Add, edit, and delete albums
- Form validation with inline errors on blur and on submit
- Persistent storage via localStorage
- Responsive layout with Bootstrap 5

---

## Author

Mathuran Chandramohan — INFT 2202 Web Development