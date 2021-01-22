import './App.css';
import React, {useReducer} from "react"
import {BrowserRouter as RouterView, Switch, Route} from 'react-router-dom'
import TodoContainerComponent from "./components/TodoContainer";
import NavbarComponent from "./components/Navbar";
import ShopComponent from "./components/Shop";
import ShopDetailComponent from "./components/ShopDetail";
import * as _ from "lodash";


export const ItemsContext = React.createContext();


const initState = []

// todo move all the reducers to seperate file and include it here...
const reducer = (state, action) => {
    let todos = []
    let indexOfTodo = 0
    switch (action.type){
        case "newElement":
            action.event.preventDefault()
            let task = document.getElementsByClassName('add-task')[0].value
            todos = _.cloneDeep(state)
            if(task && task !== ''){
                indexOfTodo = todos.length + 1
                let id = indexOfTodo === 1 ? 1 : todos[indexOfTodo-2]['id']+1
                const exist = todos.findIndex(item => item.task === task)
                if(exist >= 0){
                    return state;
                }else{
                    todos.push({id:id, task:task, completed:false});
                    return todos
                }
            }

            // todo update the actions creators to constants
        case "markedChecked":
            action.event.target.parentElement.parentElement.parentElement.classList.toggle('complete')
            todos = _.cloneDeep(state)
            indexOfTodo = todos.findIndex(item => item.id === action.id)
            if(indexOfTodo >= 0) {
                todos[indexOfTodo]['completed'] = !todos[indexOfTodo]['completed']
            }
            return todos

        case "removeElement":
            todos = [...state]
            indexOfTodo = todos.findIndex(item => item.id === action.id)
            if(indexOfTodo >= 0) {
                todos.splice(indexOfTodo, 1)
            }
            return todos

        default:
            return state
    }
}

function App(){
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ItemsContext.Provider
            value={{itemState: state, itemDispatch: dispatch}}>
            <RouterView>
                <div>
                    <NavbarComponent />
                    <Switch>
                        <Route path='/' exact component={TodoContainerComponent} />
                        <Route path='/todo-list' exact component={TodoContainerComponent} />
                        <Route path='/albums' exact component={ShopComponent} />
                        <Route path='/albums/:id' exact component={ShopDetailComponent} />
                    </Switch>
                </div>
            </RouterView>
        </ItemsContext.Provider>

    )

}

export default App;


// class App extends React.Component {
//     state = {
//         todo: todosData,
//         count:0,
//         color:"",
//     }
//
//
//     handleChange = (id) => {
//         this.setState(prevState => {
//             let newList = prevState.todo.map(item => {
//                 if(item.id === id){
//                     return{
//                         ...item,
//                         completed: !item.completed
//                     }
//                 }
//                 return item
//             })
//             return {
//                 todo: newList
//             }
//         })
//     }
//
//     counter = () => {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1,
//             }
//         })
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.count !== this.state.count){
//             this.setState({color:randomColor()})
//         }
//     }
//
//     render() {
//         let todolist = this.state.todo.map(item => <TodoItemComponent
//             key={item.id} item={item}
//             handleChange={this.handleChange}/>)
//         return (
//             <div style={{padding: "20px"}}>{todolist}
//                 <h1 style={{color:this.state.color}}>{this.state.count}</h1>
//                 <button onClick={this.counter}>Click</button>
//             </div>
//         )
//     }
//
// }


