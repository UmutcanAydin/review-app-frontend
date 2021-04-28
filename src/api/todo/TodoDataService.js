import axios from "axios"

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get('http://localhost:8080//users/'+name+'/todos') //this is a promise
    }
    retrieveTodo(name, id){
        return axios.get('http://localhost:8080//users/'+name+'/todos/'+id) //this is a promise
    }
    updateTodo(name, id, todo){
        return axios.put('http://localhost:8080//users/'+name+'/todos/'+id, todo) //this is a promise
    }
    createTodo(name, todo){
        return axios.post('http://localhost:8080//users/'+name+'/todos', todo) //this is a promise
    }
    deleteTodo(name, id){
        return axios.delete('http://localhost:8080//users/'+name+'/todos/'+id) //this is a promise
    }
}

export default new TodoDataService()