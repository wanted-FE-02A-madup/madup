import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { ArrowDown } from '../../assets';
import { isopenDropDown } from '../../recoil/recoil';
import styles from './dropdown.module.scss';

interface IProps {
  option: Array<string>;
  title: string;
  onClick: (value: any) => void;
}
const Dropdown = ({ option, title, onClick }: IProps) => {
  const asideDropDown = title === '매드업' ? `${styles.asideDropDown}` : '';

  const [isopenDropDownContents, setIsopenDropDownContents] = useRecoilState(isopenDropDown);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleShowDropDown = () => {
    setIsopenDropDownContents((prev) => !prev);
  };

  // const handleChangeTitle = (e: any) => {
  //   const { value } = e.currentTarget;
  //   setOptionTitle(value);
  //   setIsopenDropDown(false);
  // };

  useEffect(() => {
    document.addEventListener('mousedown', clickDropDownOutside);

    return () => {
      document.removeEventListener('mousedown', clickDropDownOutside);
    };
  });

  const clickDropDownOutside = (e: MouseEvent) => {
    if (!dropDownRef.current) return;
    if (isopenDropDownContents && !dropDownRef.current.contains(e.target as Node)) {
      handleShowDropDown();
    }
  };

  return (
    <div className={`${styles.dropdown} ${asideDropDown}`} ref={dropDownRef}>
      <button type='button' onClick={handleShowDropDown}>
        {title}
        <ArrowDown />
      </button>
      {isopenDropDownContents && (
        <ul>
          {option.map((item) => {
            return (
              <li key={Math.random() * 1000}>
                <button type='button' onClick={() => onClick(item)} value={item}>
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
