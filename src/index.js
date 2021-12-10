import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './application/store';
import services from './infrastructure/services';
import App from './views';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(

    <Provider store={configureStore(services)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);