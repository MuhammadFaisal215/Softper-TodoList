import './App.css';
import {useEffect} from "react"
import {BrowserRouter as RouterView, Switch, Route} from 'react-router-dom'
import TodoContainerComponent from "./components/TodoContainer";
import NavbarComponent from "./components/Navbar";
import ShopComponent from "./components/Shop";
import ShopDetailComponent from "./components/ShopDetail";
import TodoReducers from "./reducers/TodoReducers";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {getList} from "./actions/actions";

const store = createStore(TodoReducers)

function App(){

    useEffect(() => {
        store.dispatch(getList())
    },[])

    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App;



