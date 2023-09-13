import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/store';
import { Provider } from 'react-redux';
import './index.css';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
