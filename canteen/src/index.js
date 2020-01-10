import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './head';
import Card from './card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('head'));

ReactDOM.render( <div>
				<h2 className="margin"> popular near you </h2>
				<Card name="canteen A" />
				<Card name="canteen B" />
				<Card name="canteen C"/>
				<Card name="canteen D" /> 
			
				<Card name="canteen E" />
				<Card name="canteen F"/>
				<Card name="canteen G"/>
				<Card name="canteen H" />
				</div>, document.getElementById('canteen'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
