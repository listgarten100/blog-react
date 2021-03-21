import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import ScrollToTop from './App/Components/ScrollToTop'
import App from './App/App';


const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <ScrollToTop>  
                <App/>
            </ScrollToTop>
        </HashRouter>
    </Provider>,document.getElementById('root'));


