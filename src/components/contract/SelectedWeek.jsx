import TagButton from '@shared/ui/TagButton';

const WEEKS = ['매주', '2주마다', '3주마다', '4주마다'];

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

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
            label={week}
            selected={selectedWeek === week}
            onClick={() => onSelectWeek(week)}
          />
        ))}
      </div>

      <div className='flex items-center justify-between'>
        {DAYS.map((day, index) => (
          <TagButton
            key={index}
            label={day}
            selected={selectedDate.includes(day)}
            onClick={() => toggleDaySelection(day)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectedWeek;
