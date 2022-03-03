import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App';

reactDom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.querySelector('.root')
)