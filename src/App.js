import './App.css';
import React from "react"
import {BrowserRouter as RouterView, Switch, Route} from 'react-router-dom'
import TodoContainerComponent from "./components/TodoContainer";
import NavbarComponent from "./components/Navbar";
import ShopComponent from "./components/Shop";
import ShopDetailComponent from "./components/ShopDetail";


function App(){
    return (
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


