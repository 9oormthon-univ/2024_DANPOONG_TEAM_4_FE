import { CONTRACT_TYPE } from '@/mocks/alerts';

function AlertHeader({ selected, setSelected }) {
  return (
    <div className='flex space-x-4 overflow-x-auto hide-scrollbar'>
      {CONTRACT_TYPE.map((contract, index) => (
        <button
          key={index}
          onClick={() => setSelected(contract)}
          className={`flex-shrink-0 px-6 py-2 rounded-common whitespace-nowrap ${
            selected === contract
              ? 'bg-primary text-text10 border'
              : 'text-text100'
          }`}
        >
          {contract}
        </button>
      ))}
    </div>
  );
}

export default AlertHeader;
