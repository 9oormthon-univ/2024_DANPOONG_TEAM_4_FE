function CategoryCard({ storeName, imageSrc, borderColor, bgColor, selected }) {
  return (
    <div
      className='relative flex flex-col items-center justify-center w-full p-2 transition-all shadow-md h-52 rounded-common shrink-0 hover:scale-95'
      style={{
        border: `2px solid ${borderColor}`, // 보더 색상
        backgroundColor: bgColor, // 배경 색상
      }}
    >
      {selected ? (
        <img
          src='https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732382452/check.png'
          alt='check'
        />
      ) : (
        <>
          <img src={imageSrc} alt={storeName} className='mb-5' />
          <span className='font-medium text-center'>{storeName}</span>
        </>
      )}
    </div>
  );
}

export default CategoryCard;
