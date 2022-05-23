import Button from '../../components/Button/Button';
import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import ManageItem from '../../components/ManageItem/ManageItem';
import styles from './manage.module.scss';
import ADLIST from '../../data/wanted_FE_ad-list-data-set.json';

const Manage = () => {
  return (
    <section className={styles.manageWrap}>
      <h2>광고관리</h2>
      <ContentsContainer>
        <div className={styles.manageHeader}>
          <select>
            <option value=''>전체 광고</option>
          </select>

          <Button createButton='createButton'>광고 만들기</Button>
        </div>
        <div className={styles.manageContents}>
          {ADLIST.ads.map((item) => (
            <ManageItem key={item.id} item={item} />
          ))}
        </div>
      </ContentsContainer>
    </section>
  );
};

export default Manage;
