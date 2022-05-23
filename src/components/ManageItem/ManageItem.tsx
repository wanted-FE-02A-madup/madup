import { IAdListItem } from '../../types/type';
import Button from '../Button/Button';
import styles from './manageItem.module.scss';

interface IProps {
  item: IAdListItem;
}

const ManageItem = ({ item }: IProps) => {
  return (
    <div className={styles.manageItemWrap}>
      <h3>웹광고_20210603123030</h3>
      <table>
        <tbody>
          <tr>
            <th>상태</th>
            <td>{item.status}</td>
          </tr>
          <tr>
            <th>광고 생성일</th>
            <td />
          </tr>
          <tr>
            <th>일 희망 예산</th>
            <td />
          </tr>
          <tr>
            <th>광고 수익률</th>
            <td />
          </tr>
          <tr>
            <th>매출</th>
            <td />
          </tr>
          <tr>
            <th>광고 비용</th>
            <td />
          </tr>
        </tbody>
      </table>
      <Button>수정하기</Button>
    </div>
  );
};

export default ManageItem;
