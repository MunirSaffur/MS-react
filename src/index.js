import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import  AllReducers  from './app/reducers';

const store = createStore(AllReducers);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
