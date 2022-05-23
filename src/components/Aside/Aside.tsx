import styles from './aside.module.scss';
import { Logo, ArrowDown, Dashboard, Ad, Guide } from '../../assets/index';
import { NavLink } from 'react-router-dom';
import { cx } from '../../styles';

const Aside = () => {
  return (
    <section className={styles.sidebar}>
      <h1 className={styles.logo}>
        <Logo />
      </h1>
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
        <nav className={styles.menu}>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <Dashboard style={{ marginRight: '12px' }} />
            대시보드
          </NavLink>
          <NavLink to='/manage' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <Ad style={{ marginRight: '12px' }} />
            광고관리
          </NavLink>
        </nav>
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
    </section>
  );
};

export default Aside;
