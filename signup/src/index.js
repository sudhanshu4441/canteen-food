import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './signup';
import Head from './head';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Head />, document.getElementById('head'));



ReactDOM.render(<Signup />, document.getElementById('root'));
registerServiceWorker();
