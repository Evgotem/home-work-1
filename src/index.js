import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './tutorial-7/App';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
