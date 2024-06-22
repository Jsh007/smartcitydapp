import './index.css';

import App from './App.tsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '../Router';
import { RouterProvider } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { store } from './app/store';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
);
