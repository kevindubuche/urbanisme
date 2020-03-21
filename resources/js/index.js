import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import { Provider } from 'react-redux';

import store from './store';

 ReactDOM.render(<Provider store={store}> <Application /> </Provider>, document.getElementById('root'));

