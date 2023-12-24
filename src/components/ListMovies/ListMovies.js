import { Img, Item, List, StyledLink, Title } from './ListMovies.styled';

export const ListMovies = ({ movies, location }) => {
  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
                }
                alt=""
                width={160}
              />
              <Title>{movie.title}</Title>
            </StyledLink>
          </Item>
        ))}
      </List>
    </>
  );
};
