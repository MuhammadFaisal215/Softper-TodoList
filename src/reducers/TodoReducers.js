import * as _ from "lodash";
import {MARKED_CHECKED, NEW_ELEMENT, REMOVE_ELEMENT} from "../constants/constants";

function TodoReducers(state, action){
    switch (action.type){
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

function newElement(state, action){
    const task = action.value.task
    let todos = _.cloneDeep(state)
    let indexOfTodo = todos.length + 1
    let id = indexOfTodo === 1 ? 1 : todos[indexOfTodo-2]['id']+1
    todos.push({id:id, task:task, completed:false});
    return todos
}

function markedChecked(state, action){
    const indexOfTodo = action.value.indexOfTodo
    let todos = _.cloneDeep(state)
    todos[indexOfTodo]['completed'] = !todos[indexOfTodo]['completed']
    return todos
}

function removeElement(state, action){
    const indexOfTodo = action.value.indexOfTodo
    let todos = [...state]
    todos.splice(indexOfTodo, 1)
    return todos
}

export default TodoReducers