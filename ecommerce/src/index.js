import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store= { store }>
        <ToastContainer 
          theme= "dark"
          position= "top-right"
          autoClose= {3000}
          closeOnClick
          pauseOnHover= {false}
        />

        <ToastContainer />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
