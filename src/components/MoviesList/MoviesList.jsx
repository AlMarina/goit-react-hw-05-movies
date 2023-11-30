import MoviesItems from 'components/MoviesItems/MoviesItems';
import css from './MoviesList.module.css';

export const MoviesList = ({ items }) => {
  return (
    <ul className={css.list_movie}>
      <MoviesItems items={items}></MoviesItems>
    </ul>
  );
};
