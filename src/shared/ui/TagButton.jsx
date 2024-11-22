import classNames from 'classnames';

function TagButton({
  label,
  onClick,
  selected = false,
  width,
  size = 46,
  textColor = '#B3B3B3',
  borderColor = '#B3B3B3',
  className,
  ...props
}) {
  const buttonClasses = classNames(
    'inline-flex items-center justify-center px-4 py-2 text-sm cursor-pointer rounded-common transition-all duration-150 border',
    {
      'text-[#53B175] border-[#53B175]': selected,
      [`text-[${textColor}] border-[${borderColor}]`]: !selected,
    },
    className,
  );

  const inlineStyles = {
    height: `${size}px`,
    minWidth: width ? `${width}px` : '30px',
  };

  return (
    <span
      onClick={onClick}
      className={buttonClasses}
      style={inlineStyles}
      {...props}
    >
      {label}
    </span>
  );
}

export default TagButton;
