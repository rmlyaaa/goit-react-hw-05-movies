import { Errors } from 'components/Errors/Errors';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import {
  Button,
  Information,
  StyledLink,
  SubWrapper,
} from 'components/MovieDetails/MovieDetails.styled';
import { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [isMovie, setIsMovie] = useState(false);
  const location = useLocation();
  const backLocation = useRef(location);
  return (
    <div>
      <Link to={backLocation.current.state?.from ?? '/'}>
        <Button>⇐ Go back</Button>
      </Link>

      <MovieDetails setIsMovie={setIsMovie} />
      {isMovie ? (
        <SubWrapper>
          <Information>Additional information</Information>
          <StyledLink to={'cast'}>Cast </StyledLink>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </SubWrapper>
      ) : (
        <Errors>Errors! Please try again!</Errors>
      )}

      <Outlet />
    </div>
  );
}
