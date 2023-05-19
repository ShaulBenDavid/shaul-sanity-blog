import React from 'react';
import Image from 'next/image';
import JamesClearImg from '../images/IntroTextJC.png';

const Intro = () => (
  <section className="flex items-center flex-col mt-48 text-center text-wizard-black relative">
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
    <h1 className="text-h1-dynamic font-bold text-[#3D0B4E] animate-[fadeIn_1s_ease-in_forwards]">
      Get{' '}
      <span
        className="bg-clip-text bg-gradient-to-r from-[#ad52cb] via-light-primary to-primary text-transparent"
        style={{ color: 'transparent' }}
      >
        Inspired
      </span>{' '}
      Every Day!
    </h1>
    <p className="leading-8 text-2xl">
      <span className="opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]">
        With a great tech stacks, news, tools, accessories and more...
      </span>
      <br />
      <span className="opacity-0 animate-[fadeIn_1s_ease-in_0.7s_forwards]">
        Discover the top people in the industry
      </span>
    </p>
    <Image
      src={JamesClearImg}
      alt="intro"
      className="opacity-0 animate-[fadeIn_1s_ease-in_1s_forwards]"
    />
  </section>
);

export default Intro;
