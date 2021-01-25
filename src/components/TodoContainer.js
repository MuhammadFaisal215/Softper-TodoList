import TodoItemComponent from "./TodoItem";
import AddTodoListComponent from "./AddTodoList";
import {useSelector} from 'react-redux'

function TodoContainer(){
    const itemState = useSelector(state => state)

    //    SHOWS THE UPDATED LIST
    const list= itemState.map(item => <TodoItemComponent key={item.id} item={item} /> )
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