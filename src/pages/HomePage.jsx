import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchGetTranding } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import css from './HomePage.module.css';
import { MdLocalMovies } from 'react-icons/md';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState(false);

  useEffect(() => {
    async function fetchTranding() {
      try {
        // setErr(false);
        setIsLoading(true);
        const { results } = await fetchGetTranding('/trending/movie/day');

        setTrendingMovies(results);
        // console.log(trendingMovies);
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
  }, []);

  return (
    <div>
      {trendingMovies && (
        <div>
          <h1 className={css.title_home}>
            Trending Today <MdLocalMovies className={css.icon_home} />
          </h1>
          {isLoading && <Loader />}
          <MoviesList items={trendingMovies} />
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default HomePage;
