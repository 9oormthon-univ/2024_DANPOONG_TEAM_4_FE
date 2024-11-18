import React from 'react';
import classNames from 'classnames';

const buttonColorMap = {
  primary: 'bg-primary text-text20',
  secondary: 'bg-text10 text-text100',
};

const buttonWeak = 'bg-text50 text-text20';

const buttonSizeMap = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

function Button({
  color = 'primary',
  size = 'small',
  weak = false,
  full = false,
  disabled = false,
  children,
  ...props
}) {
  const buttonClasses = classNames(
    'font-semibold rounded-common transition-all duration-150',
    weak ? buttonWeak : buttonColorMap[color],
    buttonSizeMap[size],
    {
      'w-full': full,
      'opacity-30 cursor-not-allowed': disabled,
    },
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

function ButtonGroup({ title, children }) {
  return (
    <div className='flex flex-col'>
      {title && (
        <>
          <p className='text-base font-bold'>{title}</p>
          <div className='h-2' />
        </>
      )}
      <div className='flex flex-wrap gap-2'>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { className: 'flex-1' }),
        )}
      </div>
    </div>
  );
}

Button.Group = ButtonGroup;

export default Button;
