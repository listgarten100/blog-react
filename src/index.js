import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './App/Components/ScrollToTop'
import App from './App/App';

ReactDOM.render(
    <HashRouter>
    <ScrollToTop>  
        <App/>
    </ScrollToTop>
      
    </HashRouter>,document.getElementById('root'));


