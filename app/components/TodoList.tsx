import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const TodoList = ({ todos, addTodo, deleteTodo, clearAllTodo }:any) => {
  // const todos = useSelector((state:any) => state.todos);
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch()

  const onFocus = (e:any) =>{
    setTodoText(e.target.value)
  }

  console.log(todoText)
  const handleAddTodo = () => {
    if (todoText.length>0) {
      dispatch(
        addTodo({todoText})
      )
      setTodoText('');
    }
  };
  console.log('todos ne:', todos);
  return (
    <div className='flex justify-center items-center mt-9'>
      <div className='w-[900px] p-5'>
        <div className='flex justify-center mt-9'>
          <input type="text" value={todoText} onChange={onFocus} placeholder="Todo List" className="input input-bordered w-[320px] h-[70px] max-w-xs border-2 rounded-lg" />
        </div>
        <div className='flex justify-between mt-3 w-80 mx-auto'>
          <button className='px-4 py-2 bg-green-500 text-white rounded' onClick={handleAddTodo}>Add</button>
          <button className='px-4 py-2 bg-red-500 text-white rounded'>Clear All</button>
        </div>
        <ul>
          {Array.isArray(todos) && todos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList