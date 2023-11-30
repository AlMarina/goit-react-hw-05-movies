import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgDefault from 'imgDefault';
import css from './MoviesItems.module.css';

const MoviesItems = ({ items }) => {
  const location = useLocation();
  return (
    <>
      {items.map(({ title, id, poster_path }) => (
        <li key={id} className={css.items_movies}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <img
              // className={css.img_movie}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : imgDefault
              }
              alt={title}
              width={300}
              loading="lazy"
            />

            <p className={css.title_movie}>{title}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default MoviesItems;
