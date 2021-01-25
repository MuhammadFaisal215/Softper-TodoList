import React, {useContext} from "react"
import {ItemsContext} from "../App";
import {REMOVE_ELEMENT, MARKED_CHECKED} from "../constants/constants";

function TodoItem(props) {
    const itemContext = useContext(ItemsContext)
    const complete = props.item.completed ? "todo-item complete" : "todo-item"
    return (
        <div className={complete}>
            <div className="checker">
                <span className="">
                    <input type="checkbox"
                           onChange={(event) => {
                               let indexOfTodo = itemContext.itemState.findIndex(item => item.id === props.item.id)
                               if(indexOfTodo >= 0){
                                   itemContext.itemDispatch({type: MARKED_CHECKED, value: {indexOfTodo: indexOfTodo}})
                               }
                           }}
                           checked={props.item.completed}
                    />
                </span>
            </div>
            <span className="ml-2">{props.item.task}</span>
            <span
                onClick={() => {
                    let indexOfTodo = itemContext.itemState.findIndex(item => item.id === props.item.id)
                    if(indexOfTodo >= 0){
                        itemContext.itemDispatch({type:REMOVE_ELEMENT, value: {indexOfTodo: indexOfTodo}})
                    }
                }}
                className="float-right"
            >
                x
            </span>
        </div>
    )
}


export default TodoItem