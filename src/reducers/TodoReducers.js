import * as _ from "lodash";
import {GET_LIST, MARKED_CHECKED, NEW_ELEMENT, REMOVE_ELEMENT} from "../actions/constants";

function TodoReducers(state = [], action){
    switch (action.type){
        case GET_LIST:
            return getList(state)
        case NEW_ELEMENT:
            return newElement(state, action)
        case MARKED_CHECKED:
            return markedChecked(state, action)
        case REMOVE_ELEMENT:
            return removeElement(state, action)
        default:
            return state
    }
}
function getList(state){
    let todos = [...state]
    todos = JSON.parse(localStorage.getItem('todo_list')) || []
    return todos
}

function setList(todos){
    localStorage.setItem('todo_list', JSON.stringify(todos))
}

function newElement(state, action){
    const task = action.value.task
    let todos = _.cloneDeep(state)
    let indexOfTodo = todos.length + 1
    let id = indexOfTodo === 1 ? 1 : todos[indexOfTodo-2]['id']+1
    todos.push({id:id, task:task, completed:false});
    setList(todos)
    return todos
}

function markedChecked(state, action){
    const indexOfTodo = action.value.indexOfTodo
    let todos = _.cloneDeep(state)
    todos[indexOfTodo]['completed'] = !todos[indexOfTodo]['completed']
    setList(todos)
    return todos
}

function removeElement(state, action){
    const indexOfTodo = action.value.indexOfTodo
    let todos = [...state]
    todos.splice(indexOfTodo, 1)
    setList(todos)
    return todos
}

export default TodoReducers