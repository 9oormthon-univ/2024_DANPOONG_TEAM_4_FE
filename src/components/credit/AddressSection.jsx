import Spacing from '@shared/ui/Spacing';

function AddressSection() {
  return (
    <div>
      <div className='flex items-center justify-between text-lg'>
        <p className='text-text200'>배송지</p>
        <p className='cursor-pointer text-primary'>변경하기</p>
      </div>
      <Spacing size={6} />
      <div className='flex flex-col text-sm gap-y-2'>
        <p className='text-text200'>김구름</p>
        <p className='text-text100'>010-1234-1234</p>
        <p className='text-text100'>
          경기도 용인시 수지구 호수로96번길 7, 카카오 AI 캠퍼스 101호
        </p>
        <input
          type='text'
          placeholder='배송 요청 사항을 입력해주세요. 예시) 배송 전에 연락 주세요'
          className='w-full px-4 py-2 text-sm border text-text200 rounded-common focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        />
      </div>
    </div>
  );
}

export default AddressSection;
