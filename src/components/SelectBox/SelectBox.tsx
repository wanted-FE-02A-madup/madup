import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Background } from 'victory';
import { ArrowDown } from '../../assets';
import { categoryState1, categoryState2 } from '../../recoil/recoil';
import { cx } from '../../styles';
import styles from './selectBox.module.scss';

interface IProps {
  option: Array<string>;
  color?: String;
  title: string;
  onClick: any;
}
const SelectBox = ({ option, color, title, onClick }: IProps) => {
  const [isopenDropDown, setIsopenDropDown] = useState(false);
  // const [optionTitle, setOptionTitle] = useState(option[0]);
  // const category1 = useRecoilValue(categoryState1);
  // const category2 = useRecoilValue(categoryState2);
  const handleShowDropDown = () => {
    setIsopenDropDown((prev) => !prev);
  };

  const handleChangeTitle = (item: string) => {
    // const { value } = e.currentTarget;
    // setCategory1(value);
    // setCategory2(value);

    onClick(item);
    setIsopenDropDown(false);
    // if (!color) return;
    // let convertValue = '';
    // switch (item) {
    //   case 'ROAS':
    //     convertValue = 'roas';
    //     break;
    //   case '광고비':
    //     convertValue = 'cost';
    //     break;
    //   case '노출수':
    //     convertValue = 'imp';
    //     break;
    //   case '클릭수':
    //     convertValue = 'click';
    //     break;
    //   // 수정 필요
    //   case '전환수':
    //     convertValue = 'conversions';
    //     break;
    //   // 수정 필요
    //   case '매출':
    //     convertValue = 'sales';
    //     break;
    // }
    // if (color === 'blue') {
    //   setCategory1(convertValue);
    // }
    // if (color === 'green') {
    //   setCategory2(convertValue);
    // }
  };

  return (
    <div className={styles.selectBox}>
      <button type='button' onClick={handleShowDropDown} data-color={color}>
        {title}
        <ArrowDown />
      </button>
      {isopenDropDown && (
        <ul>
          {option.map((item) => {
            return (
              <li key={Math.random() * 1000}>
                <button type='button' onClick={() => handleChangeTitle(item)} value={item}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
