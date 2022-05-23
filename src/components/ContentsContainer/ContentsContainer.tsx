import styles from './contentsContainer.module.scss';

interface IProps {
  children: JSX.Element | JSX.Element[];
}
const ContentsContainer = ({ children }: IProps) => {
  return <section className={styles.contentsContainer}>{children}</section>;
};

export default ContentsContainer;
