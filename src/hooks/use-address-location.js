import { useCallback, useState } from 'react';

const useAddressLocation = () => {
  const [addressData, setAddressData] = useState({
    address: null,
    loading: false,
    error: null,
  });

  const getAddressLocation = useCallback(async (lat, lng) => {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

    try {
      setAddressData({ address: null, loading: true, error: null });

      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data);

      if (data.address) {
        setAddressData({
          address: `${data.address.city}, ${data.address.borough}`,
          loading: false,
          error: null,
        });
      } else {
        setAddressData({
          address: null,
          loading: false,
          error: '주소를 찾을 수 없습니다.',
        });
        console.error('주소를 찾을 수 없습니다.');
      }
    } catch (error) {
      setAddressData({ address: null, loading: false, error: error.message });
      console.error('주소를 가져오는 중 오류 발생:', error.message);
    }
  }, []);

  return { addressData, getAddressLocation };
};

export default useAddressLocation;
