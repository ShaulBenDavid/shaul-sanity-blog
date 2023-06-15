import React from 'react';
import Image from 'next/image';
import JamesClearImg from '../images/IntroTextJC.png';
import JamesClearImgM from '../images/IntroTextJCM.png';
import JamesClearImgS from '../images/IntroTextJCS.png';

const Intro = () => (
  <section className="relative mt-40 flex flex-col items-center text-center text-wizard-black max-tb:mt-32">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1455/1078] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(13% 25%, 52% 35%, 100% 60%, 99% 12%, 25% 73%, 45% 8%, 0 3%)',
        }}
      />
    </div>
    <h1 className="animate-[fadeIn_1s_ease-in_forwards] text-h1-dynamic font-bold text-[#3D0B4E]">
      Get{' '}
      <span
        className="text-transparent bg-gradient-to-r from-[#ad52cb] via-light-primary to-primary bg-clip-text"
        style={{ color: 'transparent' }}
      >
        Inspired
      </span>{' '}
      Every Day!
    </h1>
    <p className="text-p-dynamic leading-8 max-sm:leading-6">
      <span className="animate-[fadeIn_1s_ease-in_0.5s_forwards] opacity-0">
        With a great tech stacks, news, tools, accessories and more...
      </span>
      <br />
      <span className="animate-[fadeIn_1s_ease-in_0.7s_forwards] opacity-0">
        Discover the top people in the industry
      </span>
    </p>
    <picture className="h-auto w-full animate-[fadeIn_1s_ease-in_1s_forwards] opacity-0 drop-shadow-lg">
      <source srcSet={JamesClearImgS.src} media="(max-width:768px)" />
      <source srcSet={JamesClearImgM.src} media="(max-width:1024px)" />
      <Image
        src={JamesClearImg}
        alt="If you get one percent better each day for one year, you’ll end up thirty-seven times better by the time you’re done. 'James Clear'"
        width="0"
        height="0"
        sizes="100vw"
      />
    </picture>
  </section>
);

export default Intro;
