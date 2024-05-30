'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducer';
import { TodoList } from './dispatch';
export const store = createStore(Reducer);

const page = () => {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  )
}

export default page
