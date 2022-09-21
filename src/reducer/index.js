export const reducer=(state=[],action)=>{

   switch (action.type) {
    case 'FETCH_PROJECTS':
        return {...state,projects:action.payload}

    default:
        break;
   }
}