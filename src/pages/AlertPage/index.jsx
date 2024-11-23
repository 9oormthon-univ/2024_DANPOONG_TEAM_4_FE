import { useState } from 'react';

import AlertHeader from '@components/alerts/Header';
import AlertCard from '@components/alerts/AlertCard';

import Spacing from '@shared/ui/Spacing';

import { DUMMY_ALERTS } from '@/mocks/alerts';

function AlertPage() {
  const [selectedContractType, setSelectedContractType] = useState('전체');

  const selectedData = DUMMY_ALERTS.filter((alert) =>
    selectedContractType === '전체'
      ? true
      : alert.type === selectedContractType,
  );

  return (
    <div className='px-4'>
      <AlertHeader
        selected={selectedContractType}
        setSelected={setSelectedContractType}
      />

      <Spacing size={10} />

      {/* 알림이 있을 경우 */}
      {selectedData.length > 0 ? (
        selectedData.map((alert) => (
          <div key={alert.id}>
            <AlertCard
              type={alert.type}
              content={alert.content}
              date={alert.date.toLocaleDateString()}
              image={alert.imageUrl}
            />
            <Spacing size={10} />
          </div>
        ))
      ) : (
        <div className='text-center text-gray-500 mt-60'>
          선택한 항목의 알림이 없습니다.
        </div>
      )}
    </div>
  );
}

export default AlertPage;
