# React Project Notes

## React Overview
- Easy to build and manage complex frontends.
- Created to fix the Phantom Message problem (at Facebook).
- React is a **library**.

---

## Creating a React Project

### Using Create React App
```bash
npx create-react-app my-app
cd my-app
npm start            # Starts the app on http://localhost:3000
npm run build        # Creates a production build
```
- Press `Ctrl + C` to stop the app.

#### Deleting Unwanted Files
- `setupTest.js`
- `reportWebVitals.js`
- `logo.svg` (React logo)
- `index.css`
- `App.css`
- `App.test.js`

Also, remove all related import statements.

---

### Using Vite to Create React App
```bash
npm create vite@latest
# Follow prompts:
# - Enter project name
# - Select React
# - Select JavaScript or TypeScript
cd project-name
npm install
npm run dev          # Starts the app on http://localhost:5173/
```

#### Deleting Unwanted Files
- `assets` folder
- `App.css`
- `index.css`

Remove all related import statements from `App.jsx`.

---

## File System Overview

### `node_modules`
- Contains all dependencies mentioned in `package.json`.

### `.gitignore`
- Specifies files to ignore while pushing to GitHub.

### `public/manifest.json`
- Metadata for app installation on devices.

### `index.html`
- The actual HTML file loaded in the browser.
- Used in Single Page Application (SPA).
- JavaScript injects React components via DOM manipulation.

### `src/index.js`
- Imports React core and Web libraries.
- Creates virtual DOM and mounts to `index.html`.
- Imports `App.js`.

### `src/App.js`
- JS file that returns a function with JSX (HTML-like code).

---

## Component Files
- Components like `App.jsx` should have function names starting with a **capital letter**.

### JSX
- JSX = JavaScript + HTML.
- A component can return **only one element/tag**.
  - To wrap multiple tags, use:
    - A `<div>`
    - An empty fragment: `<> ... </>`

---

## Virtual DOM
- `ReactDOM.createRoot()` creates a virtual DOM.
- Keeps track of changes and updates only the modified part.
- The reconciliation algorithm handles this efficiently.
- **Fibre** is the new version of the reconciler.

---

## Tailwind CSS Setup
Follow the guide at [Tailwind Installation](https://tailwindcss.com/docs/installation/framework-guides)

### Quick Setup for Vite + Tailwind (v3.4.7)
```bash
npm create vite@latest my-project -- --template react
cd my-project

npm install -D tailwindcss@3.4.7 postcss autoprefixer
npx tailwindcss init -p
```

#### `tailwind.config.js`
```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

#### `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## React Router
```bash
npm install react-router-dom
```
- Enables **client-side routing**.
- Allows URL changes without full page reload.
- Supports SPA behavior by swapping components.

---

## Redux Toolkit
```bash
npm install @reduxjs/toolkit
npm install react-redux
```

---

## Blog Project Requirements
```bash
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
```

---

