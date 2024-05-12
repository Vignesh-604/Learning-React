import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    let [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

