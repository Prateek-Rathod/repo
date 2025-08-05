import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'; //  Change this
import ShopContextProvider from './context/ShopContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </HashRouter>
  </React.StrictMode>
);
