import React,{createContext,useContext,useState} from 'react';

const myContext= createContext();

export const ContextProvider = ({children})=>{
    const [darkTheme,setDarkTheme] = useState(true);
    const [themeColor,setThemeColor] = useState('#6F38C5')
    const [showThemeColorContainer,setShowThemeColorContainer] = useState('-100%');

    return <myContext.Provider value={{
        darkTheme,setDarkTheme,
        showThemeColorContainer,setShowThemeColorContainer,
        themeColor,setThemeColor
    }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext);