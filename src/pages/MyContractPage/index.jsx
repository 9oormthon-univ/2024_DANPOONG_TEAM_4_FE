import { useNavigate } from 'react-router-dom';
import { DUMMY_MYCONTRACTS } from '../../mocks/mycotracts';
import Card from '@shared/ui/Card';

function MyContractPage() {
    const navigate = useNavigate();
    return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {DUMMY_MYCONTRACTS.map((store) => (
        <div key={store.id} className="cursor-pointer" onClick={() => navigate(`/contract/${store.id}`)}>
            <Card
                key={store.id}
                storeName={store.name}
                category={store.category}
            />
        </div>
        ))}
    </div>
    )
}

export default MyContractPage
