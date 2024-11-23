import TagButton from '@shared/ui/TagButton';

// const WEEKS = ['매주', '2주마다', '3주마다', '4주마다'];
const WEEKS = [
  { name: '매주', value: 1 },
  { name: '2주마다', value: 2 },
  { name: '3주마다', value: 3 },
  { name: '4주마다', value: 4 },
];

const DAYS = [
  { name: '월', value: 'MONDAY' },
  { name: '화', value: 'TUESDAY' },
  { name: '수', value: 'WEDNESDAY' },
  { name: '목', value: 'THURSDAY' },
  { name: '금', value: 'FRIDAY' },
  { name: '토', value: 'SATURDAY' },
  { name: '일', value: 'SUNDAY' },
];

function SelectedWeek({
  selectedWeek,
  onSelectWeek,
  selectedDate,
  onSelectedDate,
}) {
  const toggleDaySelection = (day) => {
    onSelectedDate((prevSelectedDates) =>
      prevSelectedDates.includes(day)
        ? prevSelectedDates.filter((d) => d !== day)
        : [...prevSelectedDates, day],
    );
  };

  return (
    <div className='flex flex-col gap-y-4'>
      <span className='flex items-end gap-x-2'>
        <p className='text-text200'>정규 배송일 선택</p>
        <p className='text-xs text-text100'>
          (원하시는 날짜가 있으면 추가 요청에 기입해주세요.)
        </p>
      </span>

      <div className='flex items-center justify-between'>
        {WEEKS.map((week, index) => (
          <TagButton
            key={index}
            label={week.name}
            selected={selectedWeek === week.value}
            onClick={() => onSelectWeek(week.value)}
          />
        ))}
      </div>

      <div className='flex items-center justify-between'>
        {DAYS.map((day, index) => (
          <TagButton
            key={index}
            label={day.name}
            selected={selectedDate.includes(day.value)}
            onClick={() => toggleDaySelection(day.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectedWeek;
