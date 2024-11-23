export const DUMMY_SHOPCATEGORY = [
  {
    id: 1,
    name: '농산물',
    categoryName: 'AGRICULTURAL_PRODUCTS',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299059/produce.png',
    bordercolor: '#53B175B2',
    bgcolor: '#53B1751A',
  },
  {
    id: 2,
    name: '해산물',
    categoryName: 'SEAFOOD',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299059/seafood.png',
    bordercolor: '#F8A44CB2',
    bgcolor: '#F8A44C1A',
  },
  {
    id: 3,
    name: '육류',
    categoryName: 'MEAT',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299059/meat.png',
    bordercolor: '#F7A593',
    bgcolor: '#F7A59340',
  },
  {
    id: 4,
    name: '베이커리',
    categoryName: 'BAKERY',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299058/bakery.png',
    bordercolor: '#D3B0E0',
    bgcolor: '#D3B0E040',
  },
  {
    id: 5,
    name: '유제품&계란',
    categoryName: 'DAIRY_AND_EGGS',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299058/dairy.png',
    bordercolor: '#FDE598',
    bgcolor: '#FDE59840',
  },
  {
    id: 6,
    name: '화훼',
    categoryName: 'FLORICULTURE',
    image:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732299059/flowers.png',
    bordercolor: '#B7DFF5',
    bgcolor: '#B7DFF540',
  },
];

export const getCategoryName = (name) => {
  const category = DUMMY_SHOPCATEGORY.find((item) => item.name === name);
  return category ? category.categoryName : null; // 일치하는 항목이 없으면 null 반환
};

export const getCategoryDisplayName = (categoryName) => {
  const category = DUMMY_SHOPCATEGORY.find(
    (item) => item.categoryName === categoryName,
  );
  return category ? category.name : null; // 일치하는 항목이 없으면 null 반환
};
