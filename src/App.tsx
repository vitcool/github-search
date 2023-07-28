import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Search from 'pages/Search';
import Favourites from 'pages/Favourites';
import NotFoundPage from 'pages/NotFoundPage';

import Layout from 'components/Layout';

import { Routes } from 'constants/common';

function App() {
  return (
    <ReactRoutes>
      <Route path={Routes.HOME} element={<Layout />}>
        <Route index element={<Search />} />
        <Route path={Routes.FAVOURITES} element={<Favourites />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </ReactRoutes>
  );
}

export default App;
