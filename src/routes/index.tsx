import { Route, Routes } from 'react-router-dom';
import Page from '../pages/Page';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Page />} />
    </Routes>
  );
};

export default RootRoute;
