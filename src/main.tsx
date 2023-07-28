import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import client from 'api/index.tsx';

import { FavouritesContextProvider } from 'context/FavouritesContext';

import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CssBaseline />
      <FavouritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavouritesContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
