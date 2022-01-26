import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

import 'normalize.css/normalize.css'; //all running on the same base from each browsers 
import './styles/styles.scss'; 


ReactDOM.render(<IndecisionApp /> ,document.getElementById('app'))