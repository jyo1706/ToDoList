import Swal from "sweetalert2";
import { ADD_NUMBER, EDIT_NUMBER, SUB_NUMBER } from "../Constant/addConstant"

export const add = (task)=>
{
    
    if(task===undefined || task === '')
    {
        Swal.fire({
            title: 'Warning!',
            text: 'Plz Enter Task',
            icon: 'success',
            confirmButtonText: 'OK',
          });
       
    }
    if(task!==undefined && task!=='')
    {
        return {type:ADD_NUMBER ,payload:task}
    }

}
export const sub = (id)=>
{
    return {type:SUB_NUMBER,payload:id}
}
export const edit = (task,id)=>
{
    console.log(task,id)
    return {type:EDIT_NUMBER,payload:{task,id}}
}