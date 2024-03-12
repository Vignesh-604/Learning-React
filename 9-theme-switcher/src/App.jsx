import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("dark")    // setting the default theme as dark
  
  // Empty functions are given functionalities by having same name functions
  // These functions are set in the context and are not just limited to this component
  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  // Theme changer - Manipulates the body class by removing theme classes and adding themeMode specified class
  useEffect(() => {
    document.body.classList.remove("light","dark")    // removes any current theme classes
    document.body.classList.add(themeMode)            // adds the current theme class based on themeMode
  }, [themeMode])


  return (                            // values specify the values from context that will be used
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
