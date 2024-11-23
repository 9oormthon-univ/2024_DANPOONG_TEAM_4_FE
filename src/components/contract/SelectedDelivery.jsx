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
          selected={selectedDelivery === 'delivery'}
          onClick={() => onSelectedDelivery('delivery')}
        />
        <TagButton
          className='flex-1'
          label='포장'
          selected={selectedDelivery === 'pickup'}
          onClick={() => onSelectedDelivery('pickup')}
        />
      </div>
    </div>
  );
}

export default SelectedDelivery;
