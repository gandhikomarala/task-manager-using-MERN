# TASKFLOW PRO

A task & sprint management board: a 4-stage Kanban flow, priority and
category tagging, a task creation modal, live search/filtering, and
full persistence via `localStorage` — no backend or database required.

Built with React + Vite.

## What's inside

- **Kanban board** — Backlog → In Progress → In Review → Completed, with a
  one-click **Advance →** button on each card (and a **←** to walk a task
  back a stage if it was moved too soon)
- **Priority tags** — Urgent, High, Medium, Low, color-coded
- **Category chips** — Backend, Frontend, DevOps, Security, color-coded
- **+ Create Task modal** — title, acceptance criteria, priority, category,
  assignee → lands in Backlog
- **Search bar** — filters instantly by title, assignee, or task ID
- **Filter chips** — toggle any combination of priority/category filters,
  combined with search
- **LocalStorage persistence** — tasks, column position, and everything
  else survive a refresh or closing the tab; ships with a few sample
  tasks on first run

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Since everything runs client-side with
no server or environment variables needed, you can deploy `dist/` to
**any** static host:

- **Vercel** — `vercel deploy` from this folder, or import the repo at
  [vercel.com/new](https://vercel.com/new) (it auto-detects Vite)
- **Netlify** — drag the `dist/` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo
- **GitHub Pages** — push `dist/` to a `gh-pages` branch

No database, no API keys, nothing to configure.

## A note on data

Everything is stored in the browser's `localStorage`, scoped per browser
per device. That means:

- Data persists across refreshes and closing the tab — reopening the same
  browser on the same device brings it all back
- It does **not** sync between devices or between different people's
  browsers — if you open the deployed URL from your phone, you'll see a
  fresh board, not what's on your laptop
- Clearing browser data / site data wipes it

If you outgrow this and want a shared board that the whole team sees the
same data on — with real logins, like the employee task tracker I built
earlier — that needs a real backend and database behind it. Happy to
build that version if this becomes a team tool rather than a personal
board.

## Project structure

```
src/
  components/
    Header.jsx          search bar + filter chips + create button
    Column.jsx           a single Kanban column
    TaskCard.jsx          an individual task card
    CreateTaskModal.jsx   the "+ Create Task" form
  data/
    constants.js          columns, priorities, categories, and their colors
    seed.js                sample tasks shown on first run
  hooks/
    useLocalStorageTasks.js  reads/writes tasks to localStorage
  App.jsx                  top-level state: filtering, search, task actions
  index.css                 all styling
```
