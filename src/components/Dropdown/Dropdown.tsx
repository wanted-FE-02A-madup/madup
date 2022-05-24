import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ArrowDown } from '../../assets';
import { optionTitleState } from '../../recoil/recoil';
import styles from './dropdown.module.scss';

interface IProps {
  option: Array<string>;
  title: string;
}
const Dropdown = ({ option, title }: IProps) => {
  const asideDropDown = title === '매드업' ? `${styles.asideDropDown}` : '';

  const [isopenDropDown, setIsopenDropDown] = useState(false);
  const [optionTitle, setOptionTitle] = useState(title);
  const setOptionTitleState = useSetRecoilState(optionTitleState);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleShowDropDown = () => {
    setIsopenDropDown((prev) => !prev);
  };

  const handleChangeTitle = (e: any) => {
    const { value } = e.currentTarget;
    setOptionTitle(value);
    setIsopenDropDown(false);
    setOptionTitleState(value);
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickDropDownOutside);

    return () => {
      document.removeEventListener('mousedown', clickDropDownOutside);
    };
  });

  const clickDropDownOutside = (e: MouseEvent) => {
    if (!dropDownRef.current) return;
    if (isopenDropDown && !dropDownRef.current.contains(e.target as Node)) {
      handleShowDropDown();
    }
  };

  return (
    <div className={`${styles.dropdown} ${asideDropDown}`} ref={dropDownRef}>
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

export default Dropdown;
