import React, {useState} from 'react'
import TodoItemComponent from "./TodoItem";
import AddTodoListComponent from "./AddTodoList";

function TodoContainer(){
    ////    Initialize the state
    const [state, setState] = useState({ data:[]})

    ////  Set the new element to the state
    function newElement(event){
        const task = document.getElementsByClassName('add-task')[0].value
        if(task && task !== ''){
            const todos = [...state.data]
            let indexOfTodo = todos.length
            const exist = todos.findIndex(item => item.task === task)
            if(exist >= 0){
                alert('Item already added')
            }else{
                todos.push({id:indexOfTodo + 1, task: task, completed: false})
                setState({data:todos})
                document.getElementsByClassName('add-task')[0].value = ''
            }

        }
        event.preventDefault()
    }

    ////   MARK AS COMPLETED ELEMENT
    function markedChecked(event,id){
        event.target.parentElement.parentElement.parentElement.classList.toggle('complete')
        const todos = [...state.data]
        let indexOfTodo = todos.findIndex(item => item.id === id)
        todos[indexOfTodo]['completed'] = !todos[indexOfTodo]['completed']
        setState({data:todos})
    }


    ////    SHOWS THE UPDATED LIST
    const list= state.data.map(item =>
        <TodoItemComponent
            key={item.id} item={item}
            markedChecked={markedChecked}
            removeElement={removeElement}
        />
    )

    ////    REMOVE THE DATA FROM THE LIST
    function removeElement(id){
        const todos = [...state.data]
        let indexOfTodo = todos.findIndex(item => item.id === id)
        todos.splice(indexOfTodo, 1)
        setState({data:todos})
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-8 col-xs-12">
                    <div className="card card-white">
                        <div className="card-body">
                            <AddTodoListComponent  newElement={newElement} />
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