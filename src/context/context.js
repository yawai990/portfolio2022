import React,{createContext,useContext,useState,useEffect,useReducer} from 'react';
import * as api from '../api';
import {reducer} from '../reducer'
const myContext= createContext();

const initState={
    projects:[]
  }

export const ContextProvider = ({children})=>{
    const [darkTheme,setDarkTheme] = useState('light');
    const [themeColor,setThemeColor] = useState('#6F38C5');
    const [currentPage,setCurrentPage] = useState('home');
    const [showThemeColorContainer,setShowThemeColorContainer] = useState('-100%');
    const [sideActive,setSideActive] = useState(false);
    const [projects,setProjects] = useState([]);
    const [state,dispatch] = useReducer(reducer,initState);

    const FetchProjects=async()=>{
      const {data} = await api.fetchProjects();
        
      dispatch({type:'FETCH_PROJECTS',payload:data});
    };  


    //get the theme color and mode from localstorage
    useEffect(()=>{
    const color=  localStorage.getItem('themeColor')
    const theme = localStorage.getItem('darkTheme');

      setThemeColor(color === null ? '#6F38C5':color)
      setDarkTheme(theme === null ? 'light':theme)
    },[])

    const setPage =(page)=>setCurrentPage(page);

    return <myContext.Provider value={{
        darkTheme,setDarkTheme,
        showThemeColorContainer,setShowThemeColorContainer,
        themeColor,setThemeColor,
        currentPage,setPage,
        sideActive,setSideActive,
        projects,state,setProjects,FetchProjects
    
    }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext);