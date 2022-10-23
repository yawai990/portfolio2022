const init ={
    projects:[],
    languages:[],
    exp:[],
    img:[],
    about:[],
    contact:[]
}

export const reducer=(state=init,action)=>{

   switch (action.type) {
    case 'FETCH_PROJECTS':
        return {...state,projects:action.payload}

        case 'FETCH_SKILLS':
        return {...state,languages:action.payload}

        case 'FETCH_EXP':
        return {...state,exp:action.payload}

        case 'FETCH_IMG':
            return {...state,img:action.payload}

        case 'FETCH_CONTACT':
                return {...state,contact:action.payload}

    default:
        break;
   }
}