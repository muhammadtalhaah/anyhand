import { FaStar } from 'react-icons/fa'

export const RatingStars = ({ rating }) => {
  const starStyle = {
    color: 'yellow', // Set the color to yellow
  };
  const roundedRating = Math.round(rating)
    return (
      <div className="rating-stars flex">
        {[...Array(5)].map((_, index) => (
        <FaStar key={index} style={index < roundedRating ? starStyle : { color: 'transparent' }} />
        ))}
      </div>
    )
  }
  