import React, {useContext} from "react"
import {ItemsContext} from '../App'

function AddTodoList(props){
    const itemContext = useContext(ItemsContext)
    return (
        <form
            onSubmit={event => {
                itemContext.itemDispatch({type:'newElement', event: event})
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