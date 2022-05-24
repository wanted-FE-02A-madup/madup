import styles from './contentsContainer.module.scss';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}
const ContentsContainer = ({ children, title }: IProps) => {
  return (
    <>
      <h3>{title}</h3>
      <section className={styles.contentsContainer}>{children}</section>
    </>
  );
};

export default ContentsContainer;
