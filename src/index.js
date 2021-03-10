import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './App/Components/ScrollToTop'
import App from './App/App';

ReactDOM.render(
    <BrowserRouter>
    <ScrollToTop>  
        <App/>
    </ScrollToTop>
      
    </BrowserRouter>,document.getElementById('root'));


