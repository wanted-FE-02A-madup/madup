import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
