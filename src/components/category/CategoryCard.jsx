function CategoryCard({ storeName, imageSrc, borderColor, bgColor }) {
  return (
    <div
      className='flex flex-col items-center justify-center w-40 h-48 p-2 transition-all shadow-md rounded-common shrink-0 hover:scale-95'
      style={{
        border: `2px solid ${borderColor}`, // 보더 색상
        backgroundColor: bgColor, // 배경 색상
      }}
    >
      <img src={imageSrc} alt={storeName} className='mb-5' />
      <span className='font-medium text-center'>{storeName}</span>
    </div>
  );
}

export default CategoryCard;
