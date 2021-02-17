export const modalReducer = (state, action) => {  
 //Used to change messages in Modal
 let message

 switch (action.type) {
     case 'change':
         return{
             ...state,
            message: action.value
         };
 
     default:
         return state;
 }
}