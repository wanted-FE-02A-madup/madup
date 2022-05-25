import { useRecoilState } from 'recoil';

import ADLIST from '../../data/wanted_FE_ad-list-data-set.json';
import { manageState } from '../../recoil/recoil';
import { useFetchData } from '../../hooks/useFetchData';

import Button from '../../components/Button/Button';
import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Dropdown from '../../components/Dropdown/Dropdown';
import Loading from '../../components/Loading/Loading';
import ManageItem from './ManageItem/ManageItem';

import styles from './manage.module.scss';

const Manage = () => {
  const MANAGE_CATEGORY = ['전체 광고', '진행중인 광고', '중단된 광고'];

  const [optionTitle, setOptionTitle] = useRecoilState(manageState);

  const allItem = ADLIST.ads.map((item) => item);
  const activeItem = ADLIST.ads.filter((item) => item.status === 'active');
  const endedItem = ADLIST.ads.filter((item) => item.status === 'ended');

  const adLists = useFetchData(ADLIST.ads);

  return (
    <section className={styles.manageWrap}>
      {adLists.length !== 0 ? (
        <>
          <HeaderTitle isDate={false} title='광고관리' />
          <ContentsContainer>
            <div className={styles.manageHeader}>
              <Dropdown option={MANAGE_CATEGORY} title={optionTitle} onClick={setOptionTitle} />

              <Button createButton='createButton'>광고 만들기</Button>
            </div>
            <div className={styles.manageContents}>
              {optionTitle === '전체 광고' && allItem.map((item) => <ManageItem key={item.id} item={item} />)}
              {optionTitle === '진행중인 광고' && activeItem.map((item) => <ManageItem key={item.id} item={item} />)}
              {optionTitle === '중단된 광고' && endedItem.map((item) => <ManageItem key={item.id} item={item} />)}
            </div>
          </ContentsContainer>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Manage;
