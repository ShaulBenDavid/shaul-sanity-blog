import React from 'react';
import Image from 'next/image';
import JamesClearImg from '../images/IntroTextJC.png';

const Intro = () => (
  <section className="relative mt-48 flex flex-col items-center text-center text-wizard-black">
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
    <p className="text-2xl leading-8">
      <span className="animate-[fadeIn_1s_ease-in_0.5s_forwards] opacity-0">
        With a great tech stacks, news, tools, accessories and more...
      </span>
      <br />
      <span className="animate-[fadeIn_1s_ease-in_0.7s_forwards] opacity-0">
        Discover the top people in the industry
      </span>
    </p>
    <Image
      src={JamesClearImg}
      alt="If you get one percent better each day for one year, you’ll end up thirty-seven times better by the time you’re done."
      width="0"
      height="0"
      sizes="100vw"
      className="h-auto w-full animate-[fadeIn_1s_ease-in_1s_forwards]  opacity-0"
    />
  </section>
);

export default Intro;
