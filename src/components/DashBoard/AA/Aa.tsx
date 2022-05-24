import React from 'react';
import styles from './aa.module.scss';

const Aa = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.adStatus}>
        <div className={styles.chartBox}>
          <div className={styles.chart}>
            <button type='button'>Roas</button>
            <button type='button'>Roas</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aa;
