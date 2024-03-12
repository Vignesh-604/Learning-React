# 10. Todo

Todo application using context and local storage to manage data.  
Local Storage is the browser's local storage that can be accessed by inspect.  
Changes made here are saved even after exitting the browser.

## File System 📁
- **TodoContext** : Provides a context and a provider along with a custom hook to use the context in other components.
- **App.jsx** : Declaring context functions, using `useEffect` hook to implement the changes to local storage and wrapping App component with context wrapper. Also maps todos object to pass individual todo to TodoItem component.
- **TodoForm.jsx** :  Component that adds new todos.
- **TodoItem.jsx** : Todo Item component that allows check marking, edit and deletion of individual todos.