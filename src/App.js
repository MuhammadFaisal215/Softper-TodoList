import './App.css';
import React, {useReducer} from "react"
import {BrowserRouter as RouterView, Switch, Route} from 'react-router-dom'
import TodoContainerComponent from "./components/TodoContainer";
import NavbarComponent from "./components/Navbar";
import ShopComponent from "./components/Shop";
import ShopDetailComponent from "./components/ShopDetail";
import TodoReducers from "./reducers/TodoReducers";

export const ItemsContext = React.createContext();

const initState = []

function App(){
    const [state, dispatch] = useReducer(TodoReducers, initState)
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



