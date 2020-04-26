import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';

import store from './store';
import Blog from './components/New/Blog';

 ReactDOM.render(<Provider store={store}> <Blog /> </Provider>, document.getElementById('root'));

