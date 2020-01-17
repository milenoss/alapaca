import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../src/redux/user/store'

//browserRouter is imported when we use router component 
//provider is needed when we using react redux . its a parent that of our application. It will provide
//access to childrens. 

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
    
    document.getElementById('root')
    );
