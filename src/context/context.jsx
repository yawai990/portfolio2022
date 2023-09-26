import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';
import * as api from '../api';
import { reducer } from '../reducer';
const myContext = createContext();

const initState = {
  projects: []
}

export const ContextProvider = ({ children }) => {
  // const dispatch = useDispatch();
  const [darkTheme, setDarkTheme] = useState('light');
  const [themeColor, setThemeColor] = useState('#6F38C5');
  const [currentPage, setCurrentPage] = useState('home');
  const [showThemeColorContainer, setShowThemeColorContainer] = useState('-100%');
  const [sideActive, setSideActive] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);

  const FetchProjects = async () => {
    const { data } = await api.fetchProjects();

    dispatch({ type: 'FETCH_PROJECTS', payload: data });
  };

  const fetchSkills = async () => {
    const { data } = await api.fetchSkill();

    dispatch({ type: "FETCH_SKILLS", payload: data.languages })
  };

  const fetchExp = async () => {
    const { data } = await api.fetchExp();

    dispatch({ type: "FETCH_EXP", payload: data.experience })
  }

  const fetchImage = async () => {
    const { data } = await api.fetchImg();

    dispatch({ type: "FETCH_IMG", payload: data.data })
  }

  const getContact = async () => {
    const { data } = await api.fetchContact();

    dispatch({ type: "FETCH_CONTACT", payload: data.contact })
  }
  useEffect(() => {
    FetchProjects()
    fetchSkills()
    fetchExp()
    fetchImage()
    getContact()
  }, []);

  //get the theme color and mode from localstorage
  useEffect(() => {
    const color = localStorage.getItem('themeColor')
    const theme = localStorage.getItem('darkTheme');

    setThemeColor(color === null ? '#6F38C5' : color)
    setDarkTheme(theme === null ? 'light' : theme)
  }, [])

  const setPage = (page) => setCurrentPage(page);

  return <myContext.Provider value={{
    darkTheme, setDarkTheme,
    showThemeColorContainer, setShowThemeColorContainer,
    themeColor, setThemeColor,
    currentPage, setPage,
    sideActive, setSideActive,
    state, FetchProjects

  }}>
    {children}
  </myContext.Provider>
};

export const useGlobalContext = () => useContext(myContext);