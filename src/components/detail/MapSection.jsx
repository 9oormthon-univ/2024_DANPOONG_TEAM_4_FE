import { useNavigate } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md';

import Tag from '@shared/ui/Tag';

function MapSection({ lat, lng }) {
  const navigate = useNavigate();

  const goMapHandler = () => {
    navigate(`/map?lat=${lat}&lng=${lng}`);
  };
  return (
    <section className='flex items-center justify-between'>
      <p>위치 정보</p>
      <span className='flex items-center gap-x-2'>
        <Tag label='지도 보기' onClick={goMapHandler} />
        <MdKeyboardArrowRight size={20} />
      </span>
    </section>
  );
}

export default MapSection;
