# 📚 Bookshelf App

A simple client-side book-shelving app built with **Native JavaScript (OOP)** to organize books into "reading" and "finished" shelves — no framework, just plain JS classes and the DOM.

---

## 🚀 Features

- Add new books with title, author, year, and reading status
- Two shelves: **Unfinished** and **Finished**
- Move a book between shelves with one click
- Edit book details through a modal
- Delete a book with a confirmation modal
- Search books by title (debounced live search)
- Sort books by title, author, or year
- Import / export book data as JSON
- Dark mode toggle
- Persistent storage via `localStorage`
- Installable as a PWA (offline-ready via Service Worker)

---

## 🧠 Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (Native, ES6+, OOP with Classes & Modules)
- Web Storage API (`localStorage`)
- Service Worker (PWA / offline caching)

---

## 🎯 Project Purpose

This project was built to practice and demonstrate core front-end concepts without relying on a framework:

- **Object-Oriented Programming** — books and app logic modeled as classes/objects instead of loose functions
- **ES Modules** — code split into cohesive modules (`storage`, `render`, `crud`, `utils`) and wired together with `import`/`export`
- **DOM Manipulation** — native `createElement`, `querySelector`, and event listeners, no virtual DOM
- **State Management** — a single in-memory array as the source of truth, synced to `localStorage`
- **Browser APIs** — Web Storage API, File API (import/export), and Service Worker (offline support)
- **Security basics** — output escaping to prevent XSS when rendering user input

---

## 📌 Notes

- No framework used (React, Vue, etc.) — pure native JavaScript
- Data is stored only in the browser's `localStorage`, per device/browser
- Requires a local server (e.g. Live Server) to run, since ES Modules do not work over `file://`

---

## 📷 Preview

<img width="1913" height="904" alt="image" src="https://github.com/user-attachments/assets/678dcd63-cafa-4fde-824a-ed4db8ca89f9" />

---

## ⚙️ How to Build

**Option 1 — Live Server (recommended)**
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**

**Option 2 — Any local static server**
```bash
npx serve 

👩‍💻 Developer

Name: Ratu Qurratul Aini
Status: Fullstack Cohort 2026
