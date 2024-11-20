import React from 'react';
import classNames from 'classnames';

const buttonColorMap = {
  primary: 'bg-primary text-text20',
  secondary: 'bg-text10 text-text100',
};

const buttonWeak = 'bg-text50 text-text20';

function Button({
  color = 'primary',
  weak = false,
  disabled = false,
  children,
  ...props
}) {
  const buttonClasses = classNames(
    'w-full text-lg py-4 rounded-common transition-all duration-150',
    weak ? buttonWeak : buttonColorMap[color],
    {
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
