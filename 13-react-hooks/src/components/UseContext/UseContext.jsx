import React from 'react'
import ThemeProvider from './ThemeProvider'
import ContextUser from './ContextUser'

// useContext : declare state and functions (context) in one file and wrap the components in provider
// The context values will be available to the nexting components

function UseContext() {
  return (
    <ThemeProvider>
      <h1 className=' text-7xl mb-12'><b><u>useContext Hook</u></b></h1>
      <ContextUser />
    </ThemeProvider>
  )
}

export default UseContext