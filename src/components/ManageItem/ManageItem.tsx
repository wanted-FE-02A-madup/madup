import { IAdListItem } from '../../types/adList';
import Button from '../Button/Button';
import styles from './manageItem.module.scss';

interface IProps {
  item: IAdListItem;
}

const ManageItem = ({ item }: IProps) => {
  const startData = item.startDate.split('T')[0];
  const budget = Math.floor(item.budget / 10000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const sales = Math.floor((item.report.roas * item.report.cost) / 100);
  const salesConv = Math.floor(sales / 10000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const cost = Math.floor(item.report.cost / 10000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className={styles.manageItemWrap}>
      <h3>
        {item.adType}_{item.title}
      </h3>
      <table>
        <tbody>
          <tr>
            <th>상태</th>
            <td>{item.status === 'active' ? '진행중' : '마감'}</td>
          </tr>
          <tr>
            <th>광고 생성일</th>
            <td>
              {startData} {item.endDate !== null && startData}
            </td>
          </tr>
          <tr>
            <th>일 희망 예산</th>
            <td>{`${budget}만원`}</td>
          </tr>
          <tr>
            <th>광고 수익률</th>
            <td>{item.report.roas}%</td>
          </tr>
          <tr>
            <th>매출</th>
            <td>{`${salesConv}만원`}</td>
          </tr>
          <tr>
            <th>광고 비용</th>
            <td>{`${cost}만원`}</td>
          </tr>
        </tbody>
      </table>
      <Button>수정하기</Button>
    </div>
  );
};

export default ManageItem;
