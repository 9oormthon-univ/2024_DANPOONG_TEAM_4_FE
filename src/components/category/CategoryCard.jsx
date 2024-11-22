import React from 'react';

function CategoryCard({ storeName, imageSrc, borderColor, bgColor }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-44 h-48 transition-all shrink-0 hover:scale-95"
      style={{
        border: `2px solid ${borderColor}`, // 보더 색상
        backgroundColor: bgColor,           // 배경 색상
      }}
    >
      <img src={imageSrc} alt={storeName} className="mb-5" />
      <span className="text-center font-medium">{storeName}</span>
    </div>
  );
}

export default CategoryCard;
