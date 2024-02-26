'use client'

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('girl');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => useContext(ThemeContext)