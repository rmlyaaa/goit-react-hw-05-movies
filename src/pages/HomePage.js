import { fetchTrendMovies } from 'api';
import { useEffect, useState } from 'react';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Errors } from 'components/Errors/Errors';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const FetchMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        setMovies(response.results ?? []);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    FetchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <div>
          <h1 style={{ marginLeft: 60 }}>Trending Today</h1>
          <ListMovies movies={movies} location={location} />
        </div>
      )}
      {isError && <Errors>Errors! Please try again!</Errors>}
      {isLoading && <Loader />}
    </>
  );
}
