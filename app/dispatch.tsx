import { connect } from 'react-redux';
import TodoListComponent from './components/TodoList';
import { addTodo, deleteTodo, clearTodo, editTodo } from './actions';

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: any) => dispatch(addTodo(todo)),
  deleteTodo: (id: any) => dispatch(deleteTodo(id)),
  clearTodo: () => dispatch(clearTodo()),
  editTodo: ({ id, text }: any) => dispatch(editTodo({ id, text }))
});

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
