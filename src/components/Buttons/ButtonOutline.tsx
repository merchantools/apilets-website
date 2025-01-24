import React from 'react';

const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-accent text-accent bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-accent hover:text-white transition-all hover:shadow-accent '>
      {' '}
      {children}
    </button>
  );
};

export default ButtonOutline;
