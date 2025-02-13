export default function Footer() {
  return (
    <footer className='pt-16 pb-12 bg-gray-900 md:pt-20'>
      <div className='mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto'>
        <div className='flex justify-center text-gray-400'>
          <div className='grid grid-cols-2 items-center justify-items-center gap-8 mb-20 md:gap-28'>
            <ul className='space-y-1.5'>
              <li>
                <a href='#'>
                  <img src='/logo.png' alt='Workflow' className='h-12 rounded-md' />
                </a>
              </li>
            </ul>
            {/* <ul className='space-y-1.5'>
              <li className='mb-4 font-semibold text-white uppercase'>apilets</li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Team</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul> */}
            {/* <ul className='space-y-1.5'>
              <li className='mb-4 font-semibold text-white uppercase'>Product</li>
              <li>
                <a href='#features'>Features</a>
              </li>
              <li>
                <a href='#'>Design</a>
              </li>
              <li>
                <a href='#'>Purpose</a>
              </li>
            </ul> */}
            <ul className='space-y-1.5'>
              <li className='mb-4 font-semibold text-white uppercase'>Support</li>
              <li>
                <a href='/contact'>Contact Us</a>
              </li>
            </ul>
            {/* <ul className='space-y-1.5'>
              <li className='mb-4 font-semibold text-white uppercase'>Resources</li>
              <li>
                <a href='#'>Developer API</a>
              </li>
              <li>
                <a href='#'>Help Center</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Security</a>
              </li>
            </ul> */}
          </div>
        </div>
        <p className='-mt-8 text-center text-gray-300'>
          {/* Made with ♡ by{' '}
          <a href='https://saurish.com/?utm_source=uranium' className='underline'>
            Saurish
          </a> */}
          . &copy; apilets 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
