import { fetchGetTranding } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onFormSubmit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.searchQuery.value
      .trim()
      .toLowerCase();

    setSearchParams({ query: value });
    evt.currentTarget.elements.searchQuery.value = '';
  };

  useEffect(() => {
    if (!query) return;
    async function fetchQuery() {
      try {
        setIsLoading(true);
        const data = await fetchGetTranding(`/search/movie`, query);

        if (data.results.length === 0) {
          toast.error(`Sorry, but no such movie was found 😕 `, {
            style: {
              border: '1px solid #713200',
              padding: '10px',
              color: 'chocolate',
              fontWeight: 700,
            },
          });
          return;
        }
        setMovies(data.results);
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
    fetchQuery();
  }, [query]);

  return (
    <>
      <div>
        <form onSubmit={onFormSubmit} className={css.form}>
          <input
            type="text"
            name="searchQuery"
            required
            placeholder="Enter request"
            className={css.input_form}
          ></input>

          <button type="submit" className={css.btn_form}>
            Search movie
          </button>
        </form>
      </div>
      {isLoading && <Loader />}
      {movies.length !== 0 && <MoviesList items={movies} />}
    </>
  );
};

export default MoviesPage;
