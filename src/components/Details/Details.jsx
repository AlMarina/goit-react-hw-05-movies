import React, { useRef } from 'react';
import imgDefault from 'imgDefault';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import css from './Details.module.css';

const Details = ({ film }) => {
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  const { title, vote_average, overview, genres, poster_path } = film;

  return (
    <div>
      <Link to={backLinkRef.current} className={css.link_back}>
        <FaArrowLeftLong className={css.icon_back} />
        Go back
      </Link>
      <div className={css.container_ditails}>
        <img
          className={css.img_poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : imgDefault
          }
          alt={title}
          width={250}
          loading="lazy"
        />

        <div>
          <h2 className={css.title_ditails}>{title}</h2>
          <p className={css.text_ditails}>
            User Score: {Math.floor((vote_average * 100) / 10)}%
          </p>
          <h3 className={css.post_title}>Overview</h3>
          <p className={css.overview}>{overview}</p>
          <h3 className={css.post_title}>Genres</h3>
          <ul className={css.genres_list}>
            {genres?.map(({ id, name }) => {
              return <p key={id}>{name}</p>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
