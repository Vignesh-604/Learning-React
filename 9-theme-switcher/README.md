# 9. Theme Switcher

A theme switcher for a card to toggle between light mode and dark mode.

# File System 📁
- **theme.jsx** : Provides a context and a provider along with a custom hook to use the context in other components.
- **App.jsx** : Declaring context functions, using `useEffect` hook to implement the changes in themeMode and wrapping App component with context wrapper.
- **themeBtn** : A toggle button component to set dark or light mode. It uses the custom hook to access context values and call functions based on toggle.
- **tailwind.config.js** : set the darkMode to be class based