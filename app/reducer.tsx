interface Todo {
    id: string;
    text: string;
}

interface State {
    todos: Todo[];
}

const initialState: State = {
    todos: []
}

export default function Reducer(state=initialState, action:any){
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state;
    }
}