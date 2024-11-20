import { useEffect, useRef, useState } from 'react';

export function useKakaoMap(location) {
  const [isLoading, setIsLoading] = useState(true);
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        );

        const options = {
          center: position,
          level: 3,
        };

        const marker = new window.kakao.maps.Marker({
          position,
        });

        if (mapContainer.current) {
          const map = new window.kakao.maps.Map(mapContainer.current, options);
          marker.setMap(map);
        }
        setIsLoading(false);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  return { isLoading, mapContainer };
}
