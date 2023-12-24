import axios from 'axios';

const keyMovie = '4218e67e195fcc1760fe389c8f9ce3a9';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${keyMovie}`);
  return response.data;
};

export const fetchSerchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${keyMovie}`
  );
  return response.data;
};

export const fetchGetMovieDetailsById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${keyMovie}`);
  return response.data;
};

export const fetchGetMovieCreditsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${keyMovie}`
  );
  return response.data;
};

export const fetchGetMovieReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${keyMovie}`
  );
  return response.data;
};
