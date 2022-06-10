import React,{useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo , updateTodo}) {

    const [edit, setEdit] = useState({
        id:null,
        value: "",
        
    });


    const submitUpdate = (value) => {
        updateTodo(edit.id,value );
        setEdit({
            id:null,
            value:''
        });

    };
    
    const [count,setCount] = useState(0);
    const incrementCount= () => {

     setCount(prevValue=>{
            return prevValue+1});
    };
     
    
 

    if(edit.id)
    {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  return todos.map((todo, index)=>(
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}>

          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
              {todo.text} 
              <span> {`(Updated ${count} times)`}</span>
          </div>

          <div className="icons">
              <RiCloseCircleLine  
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
              />
              <TiEdit 
              onClick={() =>{incrementCount() 
                setEdit({id: todo.id , value:todo.text})}}
              className='edit-icon'
               
              />

          </div>

      </div>
  ))
}

export default Todo
