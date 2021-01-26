import './App.css';
import {useEffect} from "react"
import {BrowserRouter as RouterView, Switch, Route} from 'react-router-dom'
import TodoContainerComponent from "./components/TodoContainer";
import NavbarComponent from "./components/Navbar";
import AlbumsComponent from "./components/Albums";
import AlbumDetailComponent from "./components/AlbumDetail";
import TodoReducers from "./reducers/TodoReducers";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {getList} from "./actions/actions";

const store = createStore(
    TodoReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // For redux dev tool
    )

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
                        <Route path='/albums' exact component={AlbumsComponent} />
                        <Route path='/albums/:id' exact component={AlbumDetailComponent} />
                    </Switch>
                </div>
            </RouterView>
        </Provider>
    )
}

export default App;



