import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Head from './head';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Head />, document.getElementById('head'));

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
