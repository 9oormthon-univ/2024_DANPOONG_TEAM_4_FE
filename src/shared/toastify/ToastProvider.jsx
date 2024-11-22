import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// 위에서 아래로 나타나는 애니메이션 정의

export default function ToastProvider() {
  return (
    <ToastContainer
      toastClassName={'mt-20'}
      position='top-center' // 상단 중앙에 위치
      hideProgressBar
      closeOnClick
      draggable
      pauseOnHover={false}
      closeButton={false}
      autoClose={2000}
    />
  );
}
