function FlexBetween({
  size = 'base',
  left,
  right,
  leftColor = 'text-text100',
  rightColor = 'text-text100',
}) {
  return (
    <div className='flex items-center justify-between'>
      <p className={`${leftColor} text-${size}`}>{left}</p>
      <p className={`${rightColor} text-${size}`}>{right}</p>
    </div>
  );
}

export default FlexBetween;
