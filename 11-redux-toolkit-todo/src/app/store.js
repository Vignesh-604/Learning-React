import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

//Redux store is like a central database or memory space for your application's data
//It holds all the information that your app needs to keep track of, such as todo items in this case.
export const store = configureStore({       // creating a redux store object
    reducer: todoReducer                    // manages state changes like add, update or delete data
})