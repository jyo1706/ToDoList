import { use,useRef, useState } from 'react'
import './App.css'
import { add, edit, sub} from './Redux/Action/addAction'
import {useSelector,useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function App() {
 const [task,setTask] = useState()
 const dispatch = useDispatch()
 const myState  = useSelector((state)=>state.add.task)
 const [id,setID] = useState()
 const [update,setUpdate] = useState(true)
 const [input,setInput] = useState(false)
 const [value,setValue] = useState()
 const formRef = useRef(null); // ✅ form reference
 function onHandle(e) {
  e.preventDefault();
  formRef.current.reset(); // ✅ Resets the form
 }
  return (
    <>
      <div className='add'>
      <h3>ToDO List</h3>
          <div className='addTask'>
           <form onSubmit={onHandle} ref={formRef}> 
             <input type='type' name='addTask' onChange={(e)=>{setTask(e.target.value)}} />
             <button className='btn addBtn' onClick={()=>dispatch(add(task))}>Add Task</button>
            </form>
          </div>
         
          <div className='display'>
            <ul style={{color:'black'}}>
                {
                  myState.map((item,index)=>
                  {
                    return <li key={index}>
                       <h4>{index+1}.
                         {input && index===id  ? <span style={{paddingLeft:'8px'}}><input className='w-25' defaultValue={item} onChange={(e)=>{setValue(e.target.value)}}/></span>:<span style={{paddingLeft:'8px'}}>{item}</span>}

                       </h4> 
                       <span>
                       {
                        update ?<FontAwesomeIcon onClick={()=>{setInput(true),setUpdate((prev)=>!prev),setID(index)}} className='delBtn' icon={faPen} style={{color:'green',backgroundColor:'white'}}/>
                        : <FontAwesomeIcon onClick={()=>{setInput(false),setUpdate((prev)=>!prev),dispatch(edit(value,index))}} className='delBtn' icon={faPen} style={{color:'blue',backgroundColor:'white'}}/>
                       }
                          
                          
                          <button className='delBtn' onClick={()=>dispatch(sub(index))}><FontAwesomeIcon icon={faTrash}  className='icon'/></button> 
                       </span>
                       </li>
                       
                  })                                     
                  }
            </ul>
          </div>

      </div>
      
    </>
  )
}

export default App
