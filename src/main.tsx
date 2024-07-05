import './index.css';

import App from './App.tsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '../Router.tsx';
import { RouterProvider } from 'react-router-dom';
import ThemeContextProvider from '@app/context/ThemeContext.tsx';
import { ThemeProvider } from '@mui/material';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { store } from './app/store';

// import theme from './theme/theme.ts';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeContextProvider>

    {/* </ThemeProvider> */}
  </React.StrictMode>,
);
