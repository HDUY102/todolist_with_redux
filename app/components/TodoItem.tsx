import React, { useState } from "react";

const TodoItem = ({ todo }: any) => {
  return (
    <div>
      <li>{todo.text}</li>
    </div>
  );
};

export default TodoItem;
