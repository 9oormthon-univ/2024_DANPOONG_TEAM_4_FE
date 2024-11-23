export const CONTRACT_TYPE = [
  '전체',
  '주문/배송',
  '계약',
  '프로모션',
  '리뷰',
  '고객센터',
];

export const DUMMY_ALERTS = [
  {
    id: 1,
    type: '주문/배송',
    content: '배송이 완료되었습니다! 수령 후 상태를 확인해 주세요.',
    imageUrl:
      'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1732348829/delivery.png',
    date: new Date('2024-11-23T10:00:00'),
  },
  {
    id: 2,
    type: '계약',
    content:
      '00상점과의 계약 갱신 시점이 다가옵니다. 계약 연장을 원하시면 확인해 주세요.',
    date: new Date('2024-11-23T02:00:00'),
  },
  {
    id: 3,
    type: '계약',
    content:
      '00상점과의 계약 갱신 시점이 다가옵니다. 계약 연장을 원하시면 확인해 주세요.',
    date: new Date('2024-11-22T10:00:00'),
  },
  {
    id: 4,
    type: '프로모션',
    content:
      '신규 입점 업체의 첫 거래 시 특별 할인 혜택이 제공됩니다. 이번 기회를 놓치지 마세요!',
    date: new Date('2024-11-22T10:00:00'),
  },
  {
    id: 5,
    type: '계약',
    content: '계약 갱신 시점이 다가옵니다. 계약 연장을 원하시면 확인해 주세요.',
    date: new Date('2024-11-19T10:00:00'),
  },
];
