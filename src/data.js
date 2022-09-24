import {html,css,javascript,redux,react,node,mysql,mongoDB,tailwind,bootstrap,express,oil,dashboard,waaneiza} from './assets';

export const ThemeColor = [
    '#F76E11','#6F38C5',
    '#FFB200','#1CD6CE',
    '#B33030','#E60965'
]

export const NavLinks=[
    {id:1,name:'home'},
    {id:2,name:'about'},
    {id:3,name:'skills'},
    {id:4,name:'projects'},
    {id:5,name:'contact'}
];

export const AboutData =[
    {id:1,year:2018,desc:[
        'Graduated From YUDE',
        "Certified from CVT(Electrical Profession)",
        "participated in ASC 2018 Bangkok"
    ]},
    {id:2,year:2019,desc:[
        'Worked as an Electricla Engineer'
    ]},
    {id:3,year:2021,desc:[
        'developer career started'
    ]}
];

export const skillImg=[
    {id:1,images:html},
    {id:2,images:css},
    {id:3,images:javascript},
    {id:4,images:react},
    {id:5,images:redux},
    {id:6,images:bootstrap},
    {id:7,images:tailwind},
    {id:8,images:node},
    {id:9,images:express},
    {id:10,images:mongoDB},
    {id:11,images:mysql},
];

export const skillSlogan = 'Passionate about crafting the deligtful and functional experiences and focused on writing clean and efficient code.';

export const aboutSlogan = "Hello World! I'm Yawai Aung, junior web developer , based on Yangon. I'm excited to leap and continue refining my skills with the right company.";

export const projects =[
    {
        _id:1,
        seletedFile:waaneiza,
        codeLink:'https://github.com/yawai990?tab=repositories',
         demoLink:'https://bge22customerdata.netlify.app',
      desc:'This projects created in MERN.Here, u can insert the new customer data,search'
    },
    {
        _id:2,
        seletedFile:oil,
        codeLink:'https://github.com/yawai990?tab=repositories',
         demoLink:'',
      desc:'create with node js only,CRUD,print out by vouncher,passport authenticatication.In this app,there is two types of user(admin,user).'
    },
    {
        _id:3,
        seletedFile:dashboard,
        codeLink:'https://github.com/yawai990?tab=repositories',
         demoLink:'',
      desc:'create with node js only,CRUD,print out by vouncher,passport authenticatication.In this app,there is two types of user(admin,user).'
    }
]