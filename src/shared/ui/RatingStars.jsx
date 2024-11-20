import { FaStar } from 'react-icons/fa';

function RatingStars({ rating }) {
  return (
    <main className='flex items-center gap-1'>
      {Array.from({ length: 5 }).map((_, index) => {
        const color = rating >= index + 1 ? '#F3603F' : '#DADADA';
        return <FaStar key={index} color={color} />;
      })}
    </main>
  );
}

export default RatingStars;
