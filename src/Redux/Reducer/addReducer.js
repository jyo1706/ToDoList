import { ADD_NUMBER, EDIT_NUMBER, SUB_NUMBER } from "../Constant/addConstant"

const initialize = 
{
    task:[]
   
}
console.log(initialize.task)
const addReducer = (state=initialize,action)=>
{
    switch(action.type)
    {
        case ADD_NUMBER : return {...state,task:[...state.task,action.payload]} 
        case SUB_NUMBER : return {...state,task:state.task.filter((item,index)=>index!==action.payload)}
        case EDIT_NUMBER:
          
        return {
            ...state,
            task: [
              ...state.task.filter((_, index) => index !== action.payload.id), 
              action.payload.task 
            ]
          };
        default         : return state
    }
}
export default addReducer   