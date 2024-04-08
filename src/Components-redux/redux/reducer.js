






//reducer 
// access => state , action
// state => edit by action

import { add, delete_item } from "./Actions/action-types";






const reducer1 = (state = {
    x1 : JSON.parse(localStorage.getItem("index")) || [true , true , true , true] } , action )=>{
    switch (action.type) {  
        case add :
        {
            //console.log(action.index);
            state.x1[action.index] = false;
            localStorage.setItem("index" , JSON.stringify(state.x1));
            return {...state , x1 : JSON.parse(localStorage.getItem("index"))}
            //console.log(state.x1);
        }
        case delete_item :
        {
            //console.log(action.index2);
            state.x1[action.index2] = true;
            localStorage.setItem("index" , JSON.stringify(state.x1));
            return {...state , x1 : JSON.parse(localStorage.getItem("index"))}
            console.log(state.x1);
        }
        default:
            return state;
    }
}
export default reducer1;

