import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { BiCameraMovie } from 'react-icons/bi';

const SharedLayout = () => {
  return (
    <>
      <header className={css.page_header}>
        <BiCameraMovie className={css.icon_header} />
        <nav>
          <ul className={css.nav_list}>
            <li className={css.nav_item}>
              <NavLink to="/" className={css.nav_link}>
                Home
              </NavLink>
            </li>
            <li className={css.nav_item}>
              <NavLink to="/movies" className={css.nav_link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
