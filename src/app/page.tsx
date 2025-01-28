import Landing from '@/components/Landing';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Testimonies from '@/components/Testimonies';
import Action from '@/components/Action';
import { WhatWeDo } from '@/components/WhatWeDo';

export default async function Home() {
  return (
    <>
      <Landing />
      <Features />
      <Demo />
      <WhatWeDo />
      <Testimonies />
      <Action />
    </>
  );
}
