import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
    <CssBaseline/>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

