import { connect } from 'react-redux';
import TodoListComponent from './components/TodoList'; // Import component gốc của bạn
import { addTodo, deleteTodo, deleteAllTodo, editTodo } from './actions';
// const mapStateToProps = (state:any) => {
//     return { todos: state.todos };
// };

// const mapDispatchToProps = (dispatch:any) => {
//     return {
//         addTodo: (text:string) => dispatch(addTodo(text)),
//         deleteTodo: (id:any) => dispatch(deleteTodo(id)),
//         clearAllTodo: () => dispatch(deleteAllTodo()),
//         editTodo: ({id, text}:any) => dispatch(editTodo({ id, text })),
//     };
// };

// const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);

// export default TodoList;

export const TodoList = connect(
    function mapStateToProps(state){
        return {todos: state}
    },

    function mapDispatchToProps(dispatch){
        return {
            addTodo: (text:string) => dispatch(addTodo(text)),
            deleteTodo: (id:any) => dispatch(deleteTodo(id)),
            clearAllTodo: () => dispatch(deleteAllTodo()),
            editTodo: ({id, text}:any) => dispatch(editTodo({ id, text })),
        };
    }
)(TodoListComponent)
