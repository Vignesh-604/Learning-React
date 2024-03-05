import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function NewApp() {
  let filename = "vite-react-app"
  return (
    <h3>Component in main.jsx in {filename}</h3>
  )
  // {} is called evaluated expression
  // its not plain JS - it's injecting evaluated JS into HTML (like final value of sorts)
  // This gets injected at the end of react object 
}

// React converts the above function containing HTML code into something like below object
const NewAppElement = {
  type: "h3",
  children: "Component in main.jsx"
}

// This will be converted to a object like above
const NewAppHTML = (<h3>Another Component in main.jsx using variable</h3>)

// How react actually converts the HTML code into JS object
let randomString = "To show JS injection in HTML"
const ReactElement = React.createElement(
  "h3",
  {},           // props/attributes compulsory
  "React Object. ",
  randomString
)

const ReactElement2 = React.createElement(
  "a",
  {href:"https://google.com", target:"_blank"},
  "Google Link"
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <>
    <App/>
    <NewApp /> 
    {/* {NewApp()} */}
    {NewAppHTML}
    {ReactElement}
    {ReactElement2}
  </>
)
