import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ArrowDown } from '../../assets';
import { advertisingStatusState, asideState } from '../../recoil/recoil';
import styles from './dropdown.module.scss';

interface IProps {
  option: Array<string>;
  title: string;
  onClick: (value: string) => void;
}
const Dropdown = ({ option, title, onClick }: IProps) => {
  const asideTitle = useRecoilValue(asideState);
  const advertisingStatusTitle = useRecoilValue(advertisingStatusState);
  const [isopenDropDown, setIsopenDropDown] = useState(false);

  const asideDropDown = title === asideTitle ? `${styles.asideDropDown}` : '';
  const advertisingStatusDropDown = title === advertisingStatusTitle ? `${styles.advertisingStatusDropDown}` : '';

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleShowDropDown = () => {
    setIsopenDropDown((prev) => !prev);
  };

  const handleChangeTitle = (item: string) => {
    onClick(item);
    setIsopenDropDown(false);
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
    <div className={`${styles.dropdown} ${asideDropDown} ${advertisingStatusDropDown}`} ref={dropDownRef}>
      <button type='button' onClick={handleShowDropDown}>
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

export default Dropdown;
