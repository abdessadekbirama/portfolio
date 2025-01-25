import { createContext,useState } from "react";
const ThemeContext = createContext();
const ThemeProvider = ({children})=>{
    const [light,setLight] = useState(true);
    return(
        <ThemeContext.Provider value={{light,setLight}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeProvider,ThemeContext};