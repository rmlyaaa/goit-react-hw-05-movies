import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Layout, ListNav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <ListNav>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ListNav>
        </nav>
      </Header>
      <Layout>
        <main>
          <Suspense>
            <Outlet></Outlet>
          </Suspense>
        </main>
      </Layout>
    </div>
  );
};
