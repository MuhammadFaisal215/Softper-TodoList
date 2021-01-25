import React, {useContext} from 'react'
import TodoItemComponent from "./TodoItem";
import AddTodoListComponent from "./AddTodoList";
import {ItemsContext} from "../App";

function TodoContainer(){
    const itemContext = useContext(ItemsContext)

    //    SHOWS THE UPDATED LIST
    const list= itemContext.itemState.map(item => <TodoItemComponent key={item.id} item={item} /> )

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-8 col-xs-12">
                    <div className="card card-white">
                        <div className="card-body">
                            <AddTodoListComponent  />
                            <div className="todo-list">
                                {list.length > 0 ? list : <center><h3>No task available</h3></center>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoContainer