import React from "react"

function AddTodoList(props){
    return (
        <form onSubmit={props.newElement}>
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