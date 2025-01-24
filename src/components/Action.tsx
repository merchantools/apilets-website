import { TypewriterEffectLoop, TypewriterEffectSmooth } from './TypewriterEffect';

export default function Action() {
  const words = [
    {
      text: 'ideas',
    },
    {
      text: 'innovations',
    },
    {
      text: 'apps',
    },
    {
      text: 'projects',
    },
  ];

  return (
    <div className='max-w-full md:mx-10 lg:mx-20 xl:mx-auto'>
      <div className='px-10 shadow-2xl py-14 md:py-32 md:text-center bg-[radial-gradient(circle,_theme(colors.emerald.500)_21%,_theme(colors.sky.500)_67%)]'>
        <h1 className='mb-6 text-3xl flex justify-center font-semibold text-center text-white md:text-6xl'>
          <p className='mr-2'>Transform your</p>
          <TypewriterEffectLoop words={words} />
          <br className='sm:hidden' />
        </h1>
        <h2 className='mb-10 text-xl text-center text-gray-200 md:text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis beatae ad
          repellat minus dicta magnam atque perferendis corporis! Quidem aspernatur in totam.
          Excepturi dolores nostrum quisquam modi odit praesentium.
        </h2>
        <div className='flex flex-wrap justify-center mb-10 -mt-4 space-y-4 pace-x-4'>
          <a
            className='md:mt-2 text-center text-gray-100 text-md md:text-xl font-semibold px-5 py-3 ease-in-out transform text-sm transition border-2 duration-400 hover:-translate-y-0.5 hover:text-gray-300 hover:border-gray-300 rounded-xl'
            href='#'>
            Contact Us
          </a>
        </div>
        <div className='flex -ml-4 space-x-4 text-center text-gray-100 md:justify-center md:space-x-8'>
          <div className='ml-4'>lorem • lorem ipsum • lorem</div>
        </div>
      </div>
    </div>
  );
}
