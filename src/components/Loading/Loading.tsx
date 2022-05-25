import React from 'react';
import spinner from '../../assets/loading.gif';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={spinner} alt='loading...' />;
    </div>
  );
};

export default Loading;
