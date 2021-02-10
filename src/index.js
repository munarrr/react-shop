import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './scroll-to-top';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
     <Proider >
     <BrowserRouter>     
         <ScrollToTop />
          <App />     
     </BrowserRouter>
    </Proider>
  </React.StrictMode>,
  document.getElementById('root')
);
