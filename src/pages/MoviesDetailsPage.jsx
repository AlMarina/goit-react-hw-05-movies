import React, { useState, useEffect } from 'react';
import { fetchGetTranding } from 'api';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Details from 'components/Details/Details';
import Loader from 'components/Loader/Loader';
import css from './MoviesDetails.module.css';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTranding() {
      if (!movieId) return;
      try {
        // setErr(false);
        setIsLoading(true);
        const results = await fetchGetTranding(`/movie/${movieId}`);
        setFilm(results);
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
      {isLoading && <Loader />}

      <Details film={film}></Details>
      <h2 className={css.title_link}>Aditional information</h2>
      <div className={css.link_container}>
        <NavLink to="cast" className={css.link_cast_rew}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.link_cast_rew}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetailsPage;
