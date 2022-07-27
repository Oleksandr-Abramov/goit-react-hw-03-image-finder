import s from './Button.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={s.button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};
