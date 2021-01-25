import {useDispatch, useSelector} from "react-redux";
import {markedChecked, removeElement} from "../actions/actions";

function TodoItem(props) {
    const itemState = useSelector(state => state)
    const itemDispatch = useDispatch();

    const complete = props.item.completed ? "todo-item complete" : "todo-item"
    return (
        <div className={complete}>
            <div className="checker">
                <span className="">
                    <input type="checkbox"
                           onChange={(event) => {
                               let indexOfTodo = itemState.findIndex(item => item.id === props.item.id)
                               if(indexOfTodo >= 0){
                                   itemDispatch(markedChecked(indexOfTodo))
                               }
                           }}
                           checked={props.item.completed}
                    />
                </span>
            </div>
            <span className="ml-2">{props.item.task}</span>
            <span
                onClick={() => {
                    let indexOfTodo = itemState.findIndex(item => item.id === props.item.id)
                    if(indexOfTodo >= 0){
                        itemDispatch(removeElement(indexOfTodo))
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