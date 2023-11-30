import React, { useEffect, useState } from 'react';
import { fetchGetTranding } from 'api';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      if (!movieId) return;
      try {
        setIsLoading(true);
        const data = await fetchGetTranding(`/movie/${movieId}/reviews`);
        setReviews(data.results);
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

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && (
        <p className={css.error_text}>
          We don't have any reviews for this movie.
        </p>
      )}
      {isLoading && <Loader />}
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={css.item_reviews}>
                <h3 className={css.title_reviews}>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
