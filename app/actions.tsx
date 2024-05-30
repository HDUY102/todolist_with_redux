import { v4 as uuidv4 } from 'uuid';

export function addTodo(todo:{text:string}){
    return{
        type: 'ADD_TODO',
        payload: {
            id: uuidv4(),
            text: todo.text
        }
    }
}

export function deleteTodo(id:string){
    return{
        type: 'DELETE_TODO',
        payload: id
    }
}

export function clearTodo(){
    return{
        type: 'CLEAR_TODO'
    }
}

export function editTodo({text,id}:any){
    return{
        type: 'EDIT_TODO',
        payload:{
            id: id,
            text: text
        }
    }
}