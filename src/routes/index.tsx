import { Route, Routes } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard/Dashboasrd';
import Manage from '../pages/Manage/Manage';

import styles from './routes.module.scss';

const RootRoute = () => {
  return (
    <div className={styles.wrapper}>
      <Aside />
      <div className={styles.contentWrap}>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Dashboard />} />
            <Route path='manage' element={<Manage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default RootRoute;
