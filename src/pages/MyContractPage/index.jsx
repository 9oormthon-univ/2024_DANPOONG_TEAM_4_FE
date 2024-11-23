import { useQuery } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import { useNavigate } from 'react-router-dom';

import Card from '@shared/ui/Card';

function MyContractPage() {
  const { data: contractData } = useQuery({
    queryKey: ['myContracts'],
    queryFn: () =>
      privateApi
        .get('/contracts?page=0&limit=10')
        .then((response) => response.data.data.content),
  });
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {contractData.map((contract, index) => (
        <div
          key={index}
          className='cursor-pointer'
          onClick={() => navigate(`/mycontract/${contract.contractId}`)}
        >
          <Card
            imageSrc={contract.profileImage}
            storeName={contract.enterpriseName}
            category={contract.category}
          />
        </div>
      ))}
    </div>
  );
}

export default MyContractPage;
