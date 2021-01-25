import React, {useContext} from "react";
import {ItemsContext} from '../App';
import {NEW_ELEMENT} from "../constants/constants";

function AddTodoList(props){
    const itemContext = useContext(ItemsContext)
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                let task = document.getElementsByClassName('add-task')[0].value
                if(task && task !== ''){
                    const todos = itemContext.itemState;
                    const exist = todos.findIndex(todo => todo.task === task)
                    if(exist >= 0){
                        alert('Item already added!.')
                    }else{
                        itemContext.itemDispatch({type:NEW_ELEMENT, value:{task:task}})
                        event.target.reset();
                    }
                }
            }}
        >
            <div className="form-row">
                <div className="form-group col-md-10">
                    <input type="text" className="form-control add-task" placeholder="New Task..." required/>
                </div>
                <div className="form-group col-md-2">
                    <button className="btn btn-success w-100">Add</button>
                </div>
            </div>

        </form>
    )
}

export default AddTodoList