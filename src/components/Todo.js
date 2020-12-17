import React, { useRef, useReducer } from 'react'
import todoReducer from '../reducers/todoReducer';

const Todo = () => {
  //to capture input from form fields in fn comp
  const todoInput = useRef(null); 
  
  // useReducer() will get a reducer as input and will return an array
  const [ todoState, todoDispatch ] = useReducer(todoReducer);

  console.log(todoState);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);

    // hit the api using axios
    // in then method dispatch

    todoDispatch({type: 'ADD_TODO', data: todoInput.current.value });
  }

  let todoList = null;
  if(todoState && todoState.length > 0){
    todoList = todoState.map( (todo, index) => {
      return(
        <li className="list-group-item" key={index}>
          {todo.text}  - {todo.completed? 'DONE': 'NOT DONE'}
          <button type='button' className='btn btn-sm btn-primary'>Edit</button>
          <button type='button' className='btn btn-sm btn-danger'>Delete</button>
        </li>
      );
    })
  }

  return (
    <div className='container'>
      <h2>Todo | with useRef() and useReducer() Hooks</h2>
      <input type='text' ref={todoInput}/>
      <button type='button' className='btn btn-success' onClick={handleAddTodo}>Add Todo</button>

      <div className='col-md-6 offset-md-3'>
        <ul className="list-group">
          {
            todoList?
            todoList 
            :
            <div className='alert alert-warning'>Pls add a todo</div>
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo
