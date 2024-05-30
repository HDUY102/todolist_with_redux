import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteTodo, editTodo} from '../actions';

const TodoItem = ({todo}:any) => {
  const dispatch = useDispatch();
  const [isEdit,setIsEdit] = useState(false)
  const [todoText, setTodoText] = useState(todo.text)
  const [isCompleted, setIsCompleted] = useState(false)
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  };
  const onFocus = (e:any) =>{
    setTodoText(e.target.value)
  }
  const handleEdit = () =>{
    if (isEdit) {
      dispatch(editTodo({ id: todo.id, text: todoText }));
    }
    setIsEdit(!isEdit);
  }

  const handleComplete = () =>{
    setIsCompleted(!isCompleted)
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex">
        {isEdit ? (
          <input type="text" value={todoText} onChange={onFocus} placeholder="Todo List"
            className="input input-bordered w-[220px] max-w-xs border-2 rounded-lg p-1"
          />
        ) : (
          <li className={`border-2 w-[220px] flex items-center rounded-lg ml-2 p-1 ${isCompleted ? "line-through": ''}`}
           onClick={handleComplete}>{todo.text}</li>
        )}
        {isEdit ? (
          <button onClick={handleEdit} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
        ):(
          <button onClick={handleEdit} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
