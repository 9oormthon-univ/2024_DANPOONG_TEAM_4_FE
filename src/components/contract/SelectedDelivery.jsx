import Spacing from '@shared/ui/Spacing';
import TagButton from '@shared/ui/TagButton';

function SelectedDelivery({ selectedDelivery, onSelectedDelivery }) {
  return (
    <div>
      <p className='text-text200'>배달/픽업 선택</p>
      <Spacing size={8} />
      <div className='flex flex-wrap gap-6'>
        <TagButton
          className='flex-1'
          label='배달'
          selected={selectedDelivery === '배달'}
          onClick={() => onSelectedDelivery('배달')}
        />
        <TagButton
          className='flex-1'
          label='포장'
          selected={selectedDelivery === '포장'}
          onClick={() => onSelectedDelivery('포장')}
        />
      </div>
    </div>
  );
}

export default SelectedDelivery;
