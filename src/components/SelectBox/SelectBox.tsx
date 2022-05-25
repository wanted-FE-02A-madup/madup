import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Background } from 'victory';
import { ArrowDown } from '../../assets';
import { categoryState1, categoryState2 } from '../../recoil/recoil';
import { cx } from '../../styles';
import styles from './selectBox.module.scss';

interface IProps {
  option: Array<string>;
  color?: String;
}
const SelectBox = ({ option, color }: IProps) => {
  const [isopenDropDown, setIsopenDropDown] = useState(false);
  const [optionTitle, setOptionTitle] = useState(option[0]);
  const [, setCategory1] = useRecoilState(categoryState1);
  const [, setCategory2] = useRecoilState(categoryState2);
  const handleShowDropDown = () => {
    setIsopenDropDown((prev) => !prev);
  };

  const handleChangeTitle = (e: any) => {
    const { value } = e.currentTarget;
    setOptionTitle(value);
    setIsopenDropDown(false);
    if (!color) return;
    if (color === 'blue') {
      setCategory1(value.value);
    }
    if (color === 'green') {
      setCategory2(value.value);
    }
  };

  return (
    <div className={styles.selectBox}>
      <button type='button' onClick={handleShowDropDown} data-color={color}>
        {optionTitle}
        <ArrowDown />
      </button>
      {isopenDropDown && (
        <ul>
          {option.map((item) => {
            return (
              <li key={Math.random() * 1000}>
                <button type='button' onClick={handleChangeTitle} value={item}>
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
