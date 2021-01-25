import {useSelector, useDispatch} from 'react-redux'
import {newElement} from "../actions/actions";

function AddTodoList(){
    const itemState = useSelector(state => state)
    const itemDispatch = useDispatch();

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                let task = document.getElementsByClassName('add-task')[0].value
                if(task && task !== ''){
                    const todos = itemState;
                    const exist = todos.findIndex(todo => todo.task === task)
                    if(exist >= 0){
                        alert('Item already added!.')
                    }else{
                        itemDispatch(newElement(task))
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