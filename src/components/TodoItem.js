import React from "react"

function TodoItem(props) {
    const complete = props.item.completed ? "todo-item complete" : "todo-item"
    return (
        <div className={complete}>
            <div className="checker">
                <span className="">
                    <input type="checkbox"
                           onChange={(event) => props.markedChecked(event,props.item.id)}
                           checked={props.item.completed}
                    />
                </span>
            </div>
            <span className="ml-2">{props.item.task}</span>
            <span onClick={() => props.removeElement(props.item.id)} className="float-right">
                x
            </span>
        </div>
    )
}

export default TodoItem