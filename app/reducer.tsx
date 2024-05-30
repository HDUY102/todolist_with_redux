const initialState= {
    todos: []
}

export default function Reducer(state=initialState, action:any){
    switch(action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos,action.payload]
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter((todo:any)=> todo.id !== action.payload)
            }
        case 'CLEAR_TODO':
            return {
                todos: []
            }
        case 'EDIT_TODO':
            return {
                todos: state.todos.map((todo:any) => todo.id === action.payload.id ? {...todo, text: action.payload.text}: todo)
            }
        default:
            return state;
    }
}