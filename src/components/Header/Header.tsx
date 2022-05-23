import styles from './header.module.scss';
import { Profile, Alarm, Setting } from '../../assets/index';

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.icon}>
        <Alarm />
      </span>
      <span className={styles.icon}>
        <Setting />
      </span>
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
