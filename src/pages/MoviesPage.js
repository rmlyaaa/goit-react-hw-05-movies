import { fetchSerchMovies } from 'api';
import { Errors } from 'components/Errors/Errors';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { Loader } from 'components/Loader/Loader';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const location = useLocation();

  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchSerchMovies(query);
        if (movies.results.length === 0) {
          setMovies([]);
          return toast.error('Movies not found');
        }
        setMovies(movies.results);
      } catch (error) {
        setisError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchMovie query={query} />
      {movies.length > 0 ? (
        <ListMovies movies={movies} location={location} />
      ) : (
        <Toaster />
      )}
      {isError && <Errors>Errors! Please try again!</Errors>}
      {isLoading && <Loader />}
    </>
  );
}
