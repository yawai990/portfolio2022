import React,{createContext,useContext,useState} from 'react';

const myContext= createContext();

export const ContextProvider = ({children})=>{

    return <myContext.Provider value={{}}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext);