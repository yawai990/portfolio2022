import React,{createContext,useContext,useState} from 'react';

const myContext= createContext();

export const ContextProvider = ({children})=>{
    const [darkTheme,setDarkTheme] = useState(false);
    const [currentPage,setCurrentPage] = useState('home');
    const [themeColor,setThemeColor] = useState('#6F38C5');
    const [showThemeColorContainer,setShowThemeColorContainer] = useState('-100%');

    const [sideActive,setSideActive] = useState(false);

    console.log(sideActive)
    
    const setPage =(page)=>setCurrentPage(page);

    return <myContext.Provider value={{
        darkTheme,setDarkTheme,
        showThemeColorContainer,setShowThemeColorContainer,
        themeColor,setThemeColor,
        currentPage,setPage,
        sideActive,setSideActive
    }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext);