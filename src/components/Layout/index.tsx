import styles from './layout.module.scss';
import { Logo, ArrowDown, Dashboard, Profile, Ad, Guide, Alarm, Setting } from '../../assets/index';
import { NavLink, Outlet } from 'react-router-dom';
import cx from 'classnames';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.service}>
          <p className={styles.title}>서비스</p>
          <div className={styles.selector}>
            <p>매드업</p>
            <span>
              <ArrowDown />
            </span>
          </div>
        </div>
        <div className={styles.addCenter}>
          <p className={styles.title}>광고센터</p>
          <ul className={styles.category}>
            <NavLink className={({ isActive }) => cx(styles.categoryItem, { [styles.isActive]: isActive })} to='/'>
              <span className={styles.categoryItemIcon}>
                <Dashboard />
              </span>
              대시보드
            </NavLink>
            <NavLink
              className={({ isActive }) => cx(styles.categoryItem, { [styles.isActive]: isActive })}
              to='/manage'
            >
              <span className={styles.categoryItemIcon}>
                <Ad />
              </span>
              광고관리
            </NavLink>
          </ul>
        </div>
        <div className={styles.guide}>
          <div className={styles.guideIcon}>
            <Guide />
          </div>
          <div className={styles.guideText}>
            <p className={styles.guideTextTitle}>레버 이용 가이드</p>
            <p className={styles.guideTextBody}>시작하기 전에 알아보기</p>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>레버는 함께 만들어갑니다.</p>
          <a className={styles.footerTerm} href='/'>
            이용약관
          </a>
        </div>
      </nav>
      <main className={styles.main}>
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
        <div className={styles.page}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
