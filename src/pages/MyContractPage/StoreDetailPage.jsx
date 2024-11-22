// import { useParams } from 'react-router-dom';
// import { DUMMY_MYCONTRACTS } from '../../mocks/mycotracts';

// // const StoreDetailPage = () => {
// // return (
// //     <div className="flex flex-col items-start p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
// //     <h1 className="text-xl font-bold mb-4">상점 이름</h1>
// //     <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-6">
// //         <span className="text-gray-500">상점대표이미지</span>
// //     </div>
// //     <div className="space-y-4 text-sm">
// //         <div>
// //         <p className="font-bold">상점 이름</p>
// //         <p className="text-gray-500">판매카테고리</p>
// //         </div>
// //         <div>
// //         <p className="font-bold">상품</p>
// //         <p className="text-gray-500">바질 1kg, 로즈마리 1kg, 타임 1kg, 고수 1kg</p>
// //         </div>
// //         <div>
// //         <p className="font-bold">정규 배송일</p>
// //         <p className="text-gray-500">매주 월요일</p>
// //         </div>
// //         <div>
// //         <p className="font-bold">계약 기간</p>
// //         <p className="text-gray-500">24.09.01-24.12.01</p>
// //         </div>
// //         <div>
// //         <p className="font-bold">추가 요청 사항</p>
// //         <p className="text-gray-500">
// //             배송 시 상자마다 별도의 신선 유지 패키지 사용
// //         </p>
// //         </div>
// //     </div>
// //     </div>
// // );
// // };

// // export default StoreDetailPage;

// function StoreDetailPage() {
//   const { storeId } = useParams();
//   const store = DUMMY_MYCONTRACTS.find((store) => store.id === parseInt(storeId));
//   console.log(store)
  
//   if (!store) {
//     return <div>상점 정보를 찾을 수 없습니다.</div>;
//   }

//   return (
//     <div className="p-4">
//       <div className="border p-4 rounded">
//         <div className="bg-gray-200 h-64 flex items-center justify-center">
//           상점대표이미지
//         </div>
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold">{store.name}</h1>
//           <p className="text-gray-500">{store.category}</p>

//           {store.details.map((detail, index) => (
//             <div key={index} className="mt-4">
//               <h2 className="text-lg font-bold">{detail.title}</h2>
//               <p>{detail.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StoreDetailPage;

import { useLocation } from 'react-router-dom';
import LazyImage from '@shared/ui/LazyImage';
import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';

function StoreDetailPage() {
  const location = useLocation();
  const store = location.state; // navigate로 전달된 데이터를 읽음

  if (!store) {
    return <div>상점 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      <IconLabel label={store.name} />

      <Spacing size={10} />

      <div className="border p-4 rounded-common">
        <LazyImage height='220px'/>
        {/* <div className="bg-gray-200 h-64 flex items-center justify-center">
          상점대표이미지
        </div> */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{store.name}</h1>
          <p className="text-gray-500">{store.category}</p>

          <div className="mt-4">
            <h2 className="text-lg font-bold">상품</h2>
            <p className="text-gray-500">{store.products}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">정규 배송일</h2>
            <p className="text-gray-500">{store.deliveryDay}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">계약 기간</h2>
            <p className="text-gray-500">{store.contractPeriod}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">추가 요청 사항</h2>
            <p className="text-gray-500">{store.additionalRequest}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreDetailPage;
