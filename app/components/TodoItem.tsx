import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from '../actions';

const TodoItem = ({todo}:any) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  };
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex">
        <li className="border-2 w-[220px] flex items-center rounded-lg">{todo.text}</li>
        <button onClick={handleDelete} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
