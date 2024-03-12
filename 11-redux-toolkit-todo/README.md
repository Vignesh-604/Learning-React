# 11. Todo application using redux toolkit

Todo application using Redux and redux toolkit for state management.

## Redux
- Redux allows you to **manage your app’s state in a single place** and keep changes in your app more predictable and traceable, making it easier to understand the changes happening in your app.  
- It is ussed to **maintain and update data across your applications for multiple components to share**, all while **remaining independent of the components.**  
- `redux` is the core library and `react-redux` is the implementation of redux for react
- Read more on redux and redux-toolkit [here](https://blog.logrocket.com/understanding-redux-tutorial-examples/).
- `npm install @reduxjs/toolkit` & `npm install react-redux`

## File system 📁
- **store.js** : configures a Redux store to manage the application state, using a specified reducer.  
- **todoSlice.js** : defines the state and logic for managing todo items, including actions and reducers.  

> [!NOTE]   
>  Basically,**store.js** creates the _storage room_ (Redux store), and **todoSlice.js** defines how todo items are _managed within it_. So, whenever you want to add, remove, or update a todo item, you interact with the todos managed by **todoSlice.js**, which in turn updates the overall storage managed by **store.js**.

- **AddTodo.jsx** : Component that adds new todos.   
- **Todos.jsx** : Component that iterates over the stored todos to list them.   
- **main.jsx** : Wraps the main component in Providr wrapper that provides the states tored in state

## Flow 📈
**store.js** is used to create a Redux store object and **todoSlice.jsx** is used to create a slice, an object that contains name of the slice, the initial state and reducers that define changes in state. Also it mentions the actions that are used to interact with the store.  
  
 **AddTodo.jsx** uses addTodo action to add todos and **Todos** is used to map ut the existing todos in store with removeTodo to delete them from the todo list. The components are placed in **App.jsx**. Finally, a provider is used to pass the store values to children compnents in **main.jsx**.