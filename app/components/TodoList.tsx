import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { useDispatch } from 'react-redux';
import {store} from '@/app/page'
import { v4 as uuidv4 } from 'uuid';
const TodoList = (props:any) => {
  //C1:
  // const { todos, addTodo, clearTodo} = props;
  const { todos,clearTodo} = props;
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch()
  const onFocus = (e:any) =>{
    setTodoText(e.target.value)
  }
  useEffect(() => {
  });
  const handleAddTodo = () => {
    if (todoText.length > 0) {
      // C1:
      // addTodo({ text: todoText });
      // C2:
      // dispatch({type: 'ADD_TODO',payload:{
      //   text: todoText,
      //   id: uuidv4()
      // }})
      // C3:
      store.dispatch({type: 'ADD_TODO',payload:{
        text: todoText,
        id: uuidv4()
      }})
      setTodoText('');
    }
  };

  const handleClearTodo = () =>{
    clearTodo()
  }

  console.log('TodoList rendered with todos:', todos); 
  return (
    <div className='flex justify-center items-center mt-9'>
      <div className='w-[900px] p-5'>
        <div className='flex justify-center mt-9'>
          <input type="text" value={todoText} onChange={onFocus} placeholder="Todo List" className="p-1 input input-bordered w-[320px] h-[70px] max-w-xs border-2 rounded-lg" />
        </div>
        <div className='flex justify-between mt-3 w-80 mx-auto'>
          <button className='px-4 py-2 bg-green-500 text-white rounded' onClick={handleAddTodo}>Add</button>
          <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={handleClearTodo}>Clear All</button>
        </div>
        <ul>
          {todos.map((todo:any) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList