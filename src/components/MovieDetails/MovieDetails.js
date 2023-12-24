import { fetchGetMovieDetailsById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Title, Text, SubTitle } from './MovieDetails.styled';

export const MovieDetails = ({ setIsMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGetMovieDetailsById(params.movieId);
        setIsMovie(true);
        setMovie(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId, setIsMovie]);

  return (
    <>
      {movie && (
        <Layout>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
            }
            alt=""
            width={240}
          />
          <div>
            <Title>
              {movie.original_title} {movie.release_date.split('-')[0]}
            </Title>
            <Text>
              User score: {Math.round(Number(movie.vote_average) * 10)}%
            </Text>
            <SubTitle>Overview</SubTitle>
            <Text>{movie.overview}</Text>
            <SubTitle>Genres</SubTitle>
            <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
          </div>
        </Layout>
      )}
      {isLoading && <Loader />}
    </>
  );
};
