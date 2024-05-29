import { v4 as uuidv4 } from 'uuid';

// const id = uuidv4()

export function addTodo(text:string){
    return{
        type: 'ADD_TODO',
        payload: {
            id: uuidv4(),
            text
        }
    }
}

export function deleteTodo(id:any){
    return{
        type: 'DELETE_TODO',
        payload: id
    }
}

export function deleteAllTodo(){
    return{
        type: 'DELETE_ALL_TODO'
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