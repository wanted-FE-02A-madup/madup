import { useUnitCutData } from '../../../hooks/useUnitCutData';
import { IAdListItem } from '../../../types/adList';
import Button from '../../Button/Button';
import styles from './manageItem.module.scss';

interface IProps {
  item: IAdListItem;
}

const ManageItem = ({ item }: IProps) => {
  const startData = item.startDate.split('T')[0];
  const endDate = item.endDate && item.endDate.split('T')[0];

  const budget = useUnitCutData(Math.floor(item.budget / 10000));
  const sales = Math.floor((item.report.roas * item.report.cost) / 100);
  const salesConv = useUnitCutData(Math.floor(sales / 10000));
  const cost = useUnitCutData(Math.floor(item.report.cost / 10000));

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
              {startData} {endDate !== null && `(${endDate})`}
            </td>
          </tr>
          <tr>
            <th>일 희망 예산</th>
            <td>{budget}</td>
          </tr>
          <tr>
            <th>광고 수익률</th>
            <td>{item.report.roas}%</td>
          </tr>
          <tr>
            <th>매출</th>
            <td>{salesConv}</td>
          </tr>
          <tr>
            <th>광고 비용</th>
            <td>{cost}</td>
          </tr>
        </tbody>
      </table>
      <Button>수정하기</Button>
    </div>
  );
};

export default ManageItem;
