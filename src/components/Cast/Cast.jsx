import React, { useEffect, useState } from 'react';
import { fetchGetTranding } from 'api';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
// import imgDefault from 'imgDefault';
import { Ukraine } from 'imgDefault';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTranding() {
      if (!movieId) return;
      try {
        // setErr(false);
        setIsLoading(true);
        const results = await fetchGetTranding(`/movie/${movieId}/credits`);
        if (!results) {
          toast.warning(
            `Sorry, we don't have any cast information for this movie`
          );
          return;
        }

        setCast(results.cast);
      } catch (error) {
        console.log(error.massage);
        toast.error('Ooops, there was an error...', {
          style: {
            border: '1px solid #713200',
            padding: '10px',
            color: '#713200',
            fontWeight: 700,
          },
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchTranding();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 && (
        <p className={css.error_text}>
          Sorry, we don't have any cast information for this movie
        </p>
      )}
      {isLoading && <Loader />}
      {cast.length !== 0 && (
        <ul className={css.list_cast}>
          {cast.map(({ profile_path, id, name, character }) => {
            return (
              <li key={id} className={css.item_cast}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : Ukraine
                  }
                  alt={name}
                  width={200}
                  className={css.img_cast}
                />

                <h3 className={css.title_cast}>{name}</h3>
                <p className={css.text_cast}>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
