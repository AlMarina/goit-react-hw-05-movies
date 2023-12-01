// import HomePage from 'pages/HomePage';
// import MoviesDetailsPage from 'pages/MoviesDetailsPage';
// import MoviesPage from 'pages/MoviesPage';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="movies" element={<MoviesPage />}></Route>
            <Route path="movies/:movieId/" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Suspense>

      <Toaster />
    </div>
  );
};
