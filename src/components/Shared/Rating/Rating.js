import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ ratings }) => {
  const numRating = +ratings;
  const ratingFloor = Math.floor(numRating);
  const ratingRound = Math.round(numRating);

  const halfStart = ratingRound - ratingFloor;
  const star = 5 - ratingRound;

  return (
    <div className="flex items-center justify-center space-x-1 text-yellow-400">
      {[...Array(ratingFloor)].map((_, i) => (
        <BsStarFill key={i} />
      ))}

      {[...Array(halfStart)].map((_, i) => (
        <BsStarHalf key={i} />
      ))}

      {[...Array(star)].map((_, i) => (
        <BsStar key={i} />
      ))}
    </div>
  );
};

export default Rating;