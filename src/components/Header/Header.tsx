import { Profile, Alarm, Setting } from '../../assets/index';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.icon} ${styles.alarm}`}>
        <Alarm />
      </div>
      <div className={styles.icon}>
        <Setting />
      </div>
      <div className={`${styles.profile}`}>
        <div className={styles.profileIcon}>
          <Profile />
        </div>
      </div>
      <p className={styles.profileName}>원티드님</p>
    </header>
  );
};

export default Header;
