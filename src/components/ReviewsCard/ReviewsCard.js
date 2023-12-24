import { Author, Text } from './ReviewsCard.styled';

export const ReviewsCard = ({ review }) => {
  return (
    <>
      <Author>Author: {review.author}</Author>
      <Text>{review.content}</Text>
    </>
  );
};
