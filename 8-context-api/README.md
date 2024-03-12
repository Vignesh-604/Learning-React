# 8 Context mini project

Context is primarily used when some data needs to be accessible by many components at different nesting levels. It acts like a global state that can be accessed and changed by many comopents.

## File System 📁
- **UserContext.js** : Provides a context using the `createContext.
- **ContextProvider.jsx** : Global context values are intiated and passed to a Context provider wrapper which gives access to context values to any nested component.
- **App.jsx** : Wraps other components under Context Provider wrapper.
- **Login.jsx** : Uses *setUser* value from context using `useContext` hook.
- **Profile.jsx** : Uses *user* value from context.