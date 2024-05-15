import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

// Other types of routers : MemoryRouter, HashRouter, StaticRouter, HistoryRouter
// MemoryRouter: used for testing / doesn't change url (all components are stored in memory)
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
