import Spacing from '@shared/ui/Spacing';

function Request({ value, onChange }) {
  return (
    <div>
      <p className='text-text200'>추가 요청 사항</p>
      <Spacing size={6} />
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='예시) 특이사항을 입력해주세요.'
        className='w-full px-4 py-2 text-sm border text-text200 rounded-common focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
      />
    </div>
  );
}

export default Request;
