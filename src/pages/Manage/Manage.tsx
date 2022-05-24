import Button from '../../components/Button/Button';
import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import ManageItem from '../../components/Management/ManageItem/ManageItem';
import styles from './manage.module.scss';
import ADLIST from '../../data/wanted_FE_ad-list-data-set.json';
import Select from '../../components/Select/Select';
import { useRecoilValue } from 'recoil';
import { optionTitleState } from '../../recoil/recoil';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

const Manage = () => {
  const ManagementCategory = ['전체 광고', '진행중인 광고', '중단된 광고'];

  const optionTitle = useRecoilValue(optionTitleState);

  const activeItem = ADLIST.ads.filter((item) => item.status === 'active');
  const endedItem = ADLIST.ads.filter((item) => item.status === 'ended');

  return (
    <section className={styles.manageWrap}>
      <HeaderTitle isDate={false} title='광고관리' />
      <ContentsContainer>
        <div className={styles.manageHeader}>
          <Select option={ManagementCategory} />

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
