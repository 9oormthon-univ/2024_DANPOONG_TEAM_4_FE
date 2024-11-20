import { memo } from 'react';

import { useKakaoMap } from '@hooks/use-kakao-map';

function Map({ location }) {
  const { isLoading, mapContainer } = useKakaoMap(location);

  return (
    <div className='h-[600px] w-full'>
      <div className='relative h-full' ref={mapContainer}>
        {isLoading && <p>Loading map...</p>}
      </div>
    </div>
  );
}

export default memo(Map);
