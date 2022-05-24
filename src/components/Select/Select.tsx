import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ArrowDown } from '../../assets';
import { optionTitleState } from '../../recoil/recoil';
import styles from './select.module.scss';

interface IProps {
  option: Array<string>;
}
const Select = ({ option }: IProps) => {
  const [isopenDropDown, setIsopenDropDown] = useState(false);
  const [optionTitle, setOptionTitle] = useRecoilState(optionTitleState);

  const handleShowDropDown = () => {
    setIsopenDropDown((prev) => !prev);
  };

  const handleChangeTitle = (e: any) => {
    const { value } = e.currentTarget;
    setOptionTitle(value);
    setIsopenDropDown(false);
  };

  return (
    <div className={styles.dropdown}>
      <button type='button' onClick={handleShowDropDown}>
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

export default Select;
