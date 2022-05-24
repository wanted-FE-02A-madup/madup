import styles from './button.module.scss';

interface IProps {
  children: string;
  createButton?: string;
}
const Button = ({ children, createButton }: IProps) => {
  const createBtn = createButton ? `${styles.createBtn}` : '';
  return (
    <button type='button' className={`${styles.button} ${createBtn}`}>
      {children}
    </button>
  );
};

export default Button;
