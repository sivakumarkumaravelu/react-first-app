import 'whatwg-fetch';

import React from 'react';
import {render} from 'react-dom';
//import {App} from './app/App';
import Router from './app/Router';

render(
    <Router />,
    document.getElementById('root')
);