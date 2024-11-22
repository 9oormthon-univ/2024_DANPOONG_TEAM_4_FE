import { useNavigate } from 'react-router-dom';

import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import Button from '@shared/ui/Button';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-green-100'>
      <div className='relative -translate-y-32'>
        <div className='flex items-center justify-center w-24 h-24 bg-green-100 rounded-full'>
          <IoCheckmarkCircleOutline className='text-6xl text-primary' />
        </div>
        <div className='absolute top-0 left-0 w-full h-full animate-pulse'>
          <span className='absolute block w-2 h-2 bg-red-400 rounded-full left-2 top-6'></span>
          <span className='absolute block w-2 h-2 bg-blue-400 rounded-full right-6 bottom-2'></span>
          <span className='absolute block w-2 h-2 bg-yellow-400 rounded-full left-10 bottom-6'></span>
          <span className='absolute block w-2 h-2 bg-green-400 rounded-full right-10 top-4'></span>
        </div>
      </div>

      <div className='text-center -translate-y-16'>
        <p className='text-3xl font-bold text-text200'>
          정기 계약 요청이
          <br />
          성공적으로 접수되었습니다!
        </p>
        <p className='mt-2 text-lg text-text100'>
          계약 진행 상황은 알림 페이지에서 확인할 수 있습니다.
        </p>
      </div>

      <div className='flex flex-wrap w-full gap-6 px-10'>
        <Button
          color='secondary'
          className='flex-1'
          onClick={() => navigate('/main')}
        >
          메인 페이지로
        </Button>
        <Button color='primary' className='flex-1' onClick={() => {}}>
          알림 페이지로
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
