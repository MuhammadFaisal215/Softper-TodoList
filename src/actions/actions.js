import {MARKED_CHECKED, NEW_ELEMENT, REMOVE_ELEMENT, GET_LIST} from "./constants";

export const getList = () => {
    return {
        type:GET_LIST
    }
}

export const newElement = (task) => {
    return {
        type:NEW_ELEMENT,
        payLoad:{
            task:task
        }
    }
}

export const markedChecked = (indexOfTodo) => {
    return {
        type: MARKED_CHECKED,
        payLoad: {
            indexOfTodo: indexOfTodo
        }
    }
}

export const removeElement = (indexOfTodo) => {
    return {
        type:REMOVE_ELEMENT,
        payLoad: {
            indexOfTodo: indexOfTodo
        }
    }
}