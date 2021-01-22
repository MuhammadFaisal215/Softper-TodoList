import React, {useContext} from "react"
import {ItemsContext} from "../App";

function TodoItem(props) {
    const itemContext = useContext(ItemsContext)
    const complete = props.item.completed ? "todo-item complete" : "todo-item"
    return (
        <div className={complete}>
            <div className="checker">
                <span className="">
                    <input type="checkbox"
                           onChange={(event) => itemContext.itemDispatch({type:"markedChecked", id:props.item.id, event:event})}
                           checked={props.item.completed}
                    />
                </span>
            </div>
            <span className="ml-2">{props.item.task}</span>
            <span onClick={() => itemContext.itemDispatch({type:"removeElement", id:props.item.id})} className="float-right">
                x
            </span>
        </div>
    )
}

export default TodoItem