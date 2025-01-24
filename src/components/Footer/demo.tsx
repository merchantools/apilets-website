import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaAngleRight, FaYoutube } from 'react-icons/fa';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className='bg-white border-t border-blueZ/10'>
      <div className='mx-auto max-w-screen-xl px-4 pb-3 pt-7 md:pt-10 sm:px-6 lg:px-8 lg:pt-14'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 px-10'>
          <div>
            <div className='flex justify-center items-center text-accent sm:justify-start'>
              <Link href={'/'} className='flex items-center gap-2 '>
                <div>
                  <p className='font-bold text-lg text-accent uppercase whitespace-nowrap '>
                    St Mary's School
                  </p>
                  <p className='font-bold text-xs leading-3 text-accent uppercase whitespace-nowrap '>
                    Mahadian, Fatehgarh Sahib
                  </p>
                </div>
              </Link>
            </div>

            {/* <p className='mt-6 max-w-md text-center leading-relaxed text-blueZ/50 sm:max-w-xs sm:text-left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet
              culpa cum itaque neque.
            </p> */}

            <div className='flex justify-center md:justify-start'>
              <ul className='mt-4 md:mt-8 space-y-4 text-sm'>
                <li>
                  <a
                    className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                    href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5 shrink-0 text-accent/90'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>

                    <span className='flex-1 text-blueZ/70'> st.marysschool@live.in</span>
                  </a>
                </li>

                <li>
                  <a
                    className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                    href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5 shrink-0 text-accent/90'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>

                    <span className='flex-1 text-blueZ/70'>855-8888-899, 856-8888-899,</span>
                  </a>
                </li>

                <li className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5 shrink-0 text-accent/90'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>

                  <address className='-mt-0.5 flex-1 not-italic text-blueZ/70'>
                    St. Mary’s school, Village mahadian, <br />
                    Fatehgarh Sahib - 140406, Punjab, India
                  </address>
                </li>
              </ul>
            </div>

            <ul className='mt-4 md:mt-6 flex justify-center gap-6 sm:justify-start md:gap-8'>
              <li>
                <a
                  href='#'
                  rel='noreferrer'
                  target='_blank'
                  className='text-accent transition hover:text-accent/75'>
                  <span className='sr-only'>Facebook</span>
                  <svg
                    className='size-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  rel='noreferrer'
                  target='_blank'
                  className='text-accent transition hover:text-accent/75'>
                  <span className='sr-only'>Instagram</span>
                  <svg
                    className='size-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  rel='noreferrer'
                  target='_blank'
                  className='text-accent transition hover:text-accent/75'>
                  <span className='sr-only'>YouTube</span>
                  <FaYoutube className='size-6' />
                </a>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2'>
            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-blueZ/90'>Quick Links</p>

              <ul className='mt-4  md:mt-8 space-y-4 text-sm text-left'>
                <li>
                  <a className='text-blueZ/70 transition hover:text-blueZ/50' href='#'>
                    Grievance Cell
                  </a>
                </li>

                <li>
                  <a className='text-blueZ/70 transition hover:text-blueZ/50' href='#'>
                    Mandatory Public Disclosure
                  </a>
                </li>

                <li>
                  <a className='text-blueZ/70 transition hover:text-blueZ/50' href='#'>
                    Curriculum/Evaluation
                  </a>
                </li>

                <li>
                  <a className='text-blueZ/70 transition hover:text-blueZ/50' href='#'>
                    CBSE Results
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-center mt-4 md:mt-0 sm:text-left'>
              <p className='text-lg font-medium text-blueZ/90'>Sitemap</p>
              <ul className='mt-4 md:mt-8 space-y-4 text-sm'>
                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    About us
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Facilities
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Admission Guildlines
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    School Uniform
                  </a>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-blueZ/90 md:h-7'> </p>
              <ul className='md:mt-8 space-y-4 text-sm'>
                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Gallery
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Results
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Activities
                  </a>
                </li>

                <li>
                  <a
                    className='text-blueZ/70 transition flex items-center mr-2 hover:text-blueZ/50'
                    href='#'>
                    <FaAngleRight className='mr-1 text-accent' />
                    Transfer Certificate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-5 border-t border-blueZ/10 pt-3 relative'>
          <div className='text-center sm:flex sm:justify-center gap-4 sm:text-left'>
            <p className='text-sm text-blueZ/50'>
              <span className='block sm:inline'>All rights reserved.</span>
            </p>
            <p className='mt-2 text-sm text-blueZ/50 sm:order-first sm:mt-0'>&copy; 2024</p>
          </div>
          <ul className='relative mt-1 md:absolute  right-0 bottom-1 flex justify-center md:justify-end '>
            <p className='text-sm text-blueZ/50'>
              Last updated on :{' '}
              {new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }).format(new Date())}{' '}
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
