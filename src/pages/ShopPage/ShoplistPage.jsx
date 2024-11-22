import { useLocation, useNavigate } from 'react-router-dom';
import { DUMMY_STORES } from '@mocks/stores';
import Card from '@shared/ui/Card';
import Header from '../../layout/Header';

function ShoplistPage() {
  const navigate = useNavigate();
  const location = useLocation(); // 라우터에서 전달된 상태(location.state) 가져오기
  const categoryName = location.state?.name; // 전달된 category.name 값

  // const filteredStores = DUMMY_STORES.filter(
  //   (store) => store.category === categoryName // 전달된 카테고리 이름으로 필터링
  // );

  return (
    <div>
      {/* Header 추가 */}
      <Header
        leftIcon={true}
        content={<span className="text-xl">{categoryName}</span>} // 헤더에 category.name 표시
        rightIcon={true}
      />
      <div className="grid grid-cols-2 gap-4 p-4">
        {DUMMY_STORES.map((store) => (
          <div
            key={store.id}
            className='cursor-pointer'
            onClick={() => navigate(`/detail/${store.id}`, { state: store })}
          >
            <Card
              key={store.id}
              storeName={store.name}
              category={store.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoplistPage;

// import { useLocation } from 'react-router-dom';
// import { DUMMY_STORES } from '@mocks/stores';
// import Card from '@shared/ui/Card';

// function ShoplistPage() {
//   const location = useLocation(); // 라우터에서 전달된 상태(location.state) 가져오기
//   console.log(location); // 전달된 state 확인
//   console.log(location.state); // state 값 확인
//   console.log(location.state?.name); // name 값 확인

//   const filteredStores = DUMMY_STORES.filter(
//     (store) => store.category === location.state?.name,0 // 전달된 카테고리 이름으로 필터링
//   );

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {filteredStores.map((store) => (
//         <Card
//           key={store.id}
//           storeName={store.name}
//           category={store.category}
//         />
//       ))}
//     </div>
//   );
// }

// export default ShoplistPage