import axios from 'axios';

const URL = 'https://portfoliodashboard22v2.herokuapp.com';

export const fetchProjects =()=>axios.get(`${URL}/projects/all_projects`);
export const fetchSkill =()=>axios.get(`${URL}/languages/get_languages`);
export const fetchExp =()=>axios.get(`${URL}/experiences/get_exp`);
export const fetchImg =()=>axios.get(`${URL}/image/get_image`);

export const sendMail = (data)=>axios.post(`${URL}/email/sends`,data);