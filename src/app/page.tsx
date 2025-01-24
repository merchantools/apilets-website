import Landing from '@/components/Landing';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Testimonies from '@/components/Testimonies';
import Action from '@/components/Action';

export default async function Home() {
  return (
    // <div className='flex flex-col items-center justify-between mt-2'>
    //   <InfiniteMovingInfos direction='left' speed='slow' />

    //   <MainSlider sliderData={mainSliderData} />

    //   <TopContainer />

    //   <div className={`py-10 md:py-16 md:mt-0 mx-auto max-w-6xl px-4 md:px-10 `}>
    //     <WelcomeContainer />
    //   </div>

    //   <div className={`py-5 md:py-5 pb-16 md:mt-0 mx-auto max-w-6xl px-4 md:px-10 `}>
    //     <h2 className='font-bold text-xl md:leading-[40px] text-accent'>Gallery</h2>
    //     <ParalaxGallery />
    //   </div>

    //   <div className={`py-10 md:py-16 md:mt-0 mx-auto max-w-6xl px-4 md:px-10  `}>
    //     <EventSlider />
    //   </div>

    //   <div className={`py-10 md:py-16 md:mt-0 mx-auto max-w-6xl px-4 md:px-10 `}>
    //     <LeadershipContainer />
    //   </div>
    // </div>

    <>
      <Landing />
      <Features />
      <Demo />
      {/* <Pricing /> */}
      <Testimonies />
      <Action />
    </>
  );
}
