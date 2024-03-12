import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode : "dark",
    darkTheme : () => {},       // these methods don't have any functionalities
    lightTheme : () => {}       // they can be provided functionalities by naming a function by the same name
})

// Wrapper component to use context in
export const ThemeProvider = ThemeContext.Provider

// custom hook that uses the context
export default function useTheme(){
    return useContext(ThemeContext)
}