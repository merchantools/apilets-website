import React from 'react';

const ButtonPrimary = ({
  children,
  className,
}: {
  children: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <button
      className={
        'font-medium tracking-wide py-2 px-5 sm:px-8 rounded-lg bg-accent hover:bg-accent/80 transition-all outline-none text-white ' +
        className
      }>
      {children}
    </button>
  );
};

export default ButtonPrimary;
