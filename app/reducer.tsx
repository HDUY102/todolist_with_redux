import { v4 as uuidv4 } from 'uuid';
interface Todo {
    id: string;
    text: string;
}

interface State {
    todos: Todo[];
}

const initialState= {
    todos: []
}

export default function Reducer(state=initialState, action:any){
    switch(action.type) {
        case 'ADD_TODO':
            return {
                // ...state,
                todos: [...state.todos,action.payload]
            }
        case 'DELETE_TODO':
            if (state.todos.length === 0) {
                return {
                    todos: []
                }
            }
            return {
                // ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'CLEAR_TODO':
            return {
                // ...state,
                todos: []
            }
        default:
            return state;
    }
}