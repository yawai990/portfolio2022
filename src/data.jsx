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

export const languageData =[
    {id:1,name:'html',role:0},
    {id:2,name:'css',role:0},
    {id:3,name:'javascript',role:0},
    {id:4,name:'react',role:0},
    {id:5,name:'vue',role:0},
    {id:6,name:'typescript',role:0},
    {id:7,name:'elm',role:0},
    {id:8,name:'jquery',role:0},
    {id:9,name:'angular',role:0},
    {id:10,name:'swift',role:0},
    {id:11,name:'bootstrap',role:0},
    {id:12,name:'tailwind',role:0},
    {id:13,name:'semantic',role:0},
    {id:14,name:'tacit',role:0},
    {id:15,name:'bulma',role:0},
    {id:16,name:'nodejs',role:1},
    {id:17,name:'ruby',role:1},
    {id:18,name:'php',role:1},
    {id:19,name:'python',role:1},
    {id:20,name:'c#',role:1},
    {id:21,name:'c++',role:1},
    {id:22,name:'java',role:1},
    {id:23,name:'rerl',role:1},
    {id:24,name:'rust',role:1},
    {id:25,name:'mysql',role:2},
    {id:26,name:'mongodb',role:2},
    {id:27,name:'sass',role:0},
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