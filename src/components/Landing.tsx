export default function Landing() {
  return (
    <section>
      <div className='max-w-3xl mx-8 md:mx-auto'>
        <div className='my-20 space-y-10 text-center sm:my-16 md:space-y-14'>
          <div className='space-y-5 md:space-y-8'>
            <h1 className='text-3xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-800'>
              modernize your retail business
            </h1>
            <h2 className='text-lg text-gray-100 md:text-2xl md:mx-10 md:text-gray-600'>
              apilets is your expert.
            </h2>
            <h2 className='text-lg text-gray-100 md:text-2xl md:mx-10 md:text-gray-600'>
              apilets is a place where you can find innovative ideas, innovations, apps, and
              projects.
            </h2>
          </div>
          {/* <div className='transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100'>
            <div className='space-y-2'>
              <a
                href='#'
                className='px-5 py-2 font-semibold text-gray-200 duration-500 ease-in-out shadow-lg hover:-translate-y-1.5 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-purple-600'>
                Explore{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='mb-0.5 h-7 w-7 hidden sm:inline'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
              <div className='pt-4 text-sm text-gray-200 sm:pt-2 md:text-gray-600'>
                Modular, easy-to-edit Next.js + Tailwind template
                <br />
                You'll enjoy the experience.
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className='relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5'>
        <div className='relative z-10'>
          <a target='_blank' rel='noreferrer' href='https://godly.website'>
            <img
              className='transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105'
              src='/product.png'
              alt='Product Image'
            />
          </a>
        </div>
        {/* <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Caption if needed
            </p> */}
      </div>
      <div className='mt-20 space-y-6 text-center mb-28 md:mt-32'>
        <h1 className='text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-600'>
          We compose your technology stack. We are your expert.
        </h1>
        <div className='w-3/5 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10'>
          <div className='flex flex-wrap items-center justify-center flex-shrink -mt-6 -ml-6 space-x-6 space-y-6'>
            {/* <img className='h-5 mt-6 ml-6 md:h-8' src='partnerLogos/stripe.svg' alt='' />
            <img className='h-7 md:h-5' src='partnerLogos/stockx.png' alt='' /> */}
            <img
              className='h-7 mt-6 ml-6 md:h-10'
              src='partnerLogos/commercetools-logo.svg'
              alt=''
            />
            <img className='h-5 md:h-8' src='partnerLogos/AWS.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/klaviyo.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/shopify.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/sap-hybris-logo.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/emarsys-logo.png' alt='' />
            <img className='h-9 md:h-6' src='partnerLogos/openai.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/sendgrid.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/Microsoft_Azure.png' alt='' />
            {/* <img className='h-5 md:h-8' src='partnerLogos/moderna.png' alt='' />
            <img className='h-5 md:h-5' src='partnerLogos/oracle.png' alt='' />
            <img className='h-5 md:h-9' src='partnerLogos/honey.png' alt='' /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
