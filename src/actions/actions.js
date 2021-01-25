import {MARKED_CHECKED, NEW_ELEMENT, REMOVE_ELEMENT, GET_LIST} from "./constants";

export const getList = () => {
    return {
        type:GET_LIST
    }
}

export const newElement = (task) => {
    return {
        type:NEW_ELEMENT,
        value:{
            task:task
        }
    }
}

export const markedChecked = (indexOfTodo) => {
    return {
        type: MARKED_CHECKED,
        value: {
            indexOfTodo: indexOfTodo
        }
    }
}

export const removeElement = (indexOfTodo) => {
    return {
        type:REMOVE_ELEMENT,
        value: {
            indexOfTodo: indexOfTodo
        }
    }
}