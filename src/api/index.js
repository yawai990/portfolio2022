import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchProjects =()=>axios.get(`${URL}/projects/all_projects`);

export const sendMail = (data)=>axios.post(`${URL}/email/sends`,data);