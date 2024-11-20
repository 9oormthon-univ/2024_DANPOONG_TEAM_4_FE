import { useLocation } from 'react-router-dom';

import Map from '@shared/map';

function MapPage() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (lat && lng) {
    return (
      <Map
        location={{ latitude: parseFloat(lat), longitude: parseFloat(lng) }}
      />
    );
  }
  return <div>위치 정보가 유효하지 않습니다.</div>;
}

export default MapPage;
