export const DUMMY_STORE = [
  {
    data: {
      store: {
        id: 1,
        imageUrl: '상점 이미지 URL',
        name: '미미네 채소가게',
        category: '농산물',
        description: '신선한 채소를 판매하는 상점입니다.',
        star: 3.5,
        location: {
          latitude: '37.5665',
          longitude: '126.9780',
          address: '서울특별시 종로구 세종대로',
        },
        products: [
          {
            productId: 'e1',
            imageUrl: '상품 이미지 URL',
            name: '양파 2kg',
            price: 8000,
          },
          {
            productId: 'e2',
            imageUrl: '상품 이미지 URL',
            name: '상추 500g',
            price: 1500,
          },
          {
            productId: 'e3',
            imageUrl: '상품 이미지 URL',
            name: '상추 300g',
            price: 1500,
          },
          {
            productId: 'e4',
            imageUrl: '상품 이미지 URL',
            name: '상추 100g',
            price: 1500,
          },
        ],
      },
    },
  },
];
