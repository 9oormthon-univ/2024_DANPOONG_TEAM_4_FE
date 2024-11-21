function TagButton({
  label,
  onClick,
  size = 46,
  textColor = '#B3B3B3',
  borderColor = '#B3B3B3',
}) {
  return (
    <span
      onClick={onClick}
      className='inline-flex items-center justify-center px-5 py-3 text-xl cursor-pointer rounded-common'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        color: textColor,
        borderColor: borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    >
      {label}
    </span>
  );
}

export default TagButton;
