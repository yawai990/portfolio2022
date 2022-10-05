import axios from 'axios';

const URL = 'https://portfoliodashboard22v2.herokuapp.com';

export const fetchProjects =()=>axios.get(`${URL}/projects/all_projects`,{
    headers: { 
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
});
export const fetchSkill =()=>axios.get(`${URL}/languages/get_languages`,{
    headers: { 
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
});
export const fetchExp =()=>axios.get(`${URL}/experiences/get_exp`,{
    headers: { 
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
});
export const fetchImg =()=>axios.get(`${URL}/image/get_image`,{
    headers: { 
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
});

export const sendMail = (data)=>axios.post(`${URL}/email/sends`,data);