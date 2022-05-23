import styles from './button.module.scss';

interface IProps {
  children: string;
  createBtn?: string;
}
const Button = ({ children, createBtn }: IProps) => {
  const a = createBtn ? 'aa' : '';
  return (
    <button type='button' className={`${styles.button} ${a}`}>
      {children}
    </button>
  );
};

export default Button;
