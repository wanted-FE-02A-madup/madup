import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Manage from '../pages/Manage';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='manage' element={<Manage />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
