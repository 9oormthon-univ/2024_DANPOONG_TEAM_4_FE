import classNames from 'classnames';

const buttonColorMap = {
  primary: 'bg-primary text-text20',
  secondary: 'bg-text10 text-text100 border-text100 border',
};

const buttonWeak = 'bg-text50 text-text20';

function Button({
  color = 'primary',
  weak = false,
  disabled = false,
  children,
  className,
  ...props
}) {
  const buttonClasses = classNames(
    'w-full text-lg py-4 rounded-common transition-all duration-150',
    weak ? buttonWeak : buttonColorMap[color],
    {
      'opacity-30 cursor-not-allowed': disabled,
    },
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
