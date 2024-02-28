import React from "react";

const OurStory = () => (
  <div className="polka-bg shadow-inset-blur mx-[calc(-50vw+50%)] flex min-h-screen w-screen justify-center bg-fixed py-6">
    <section className="mx-2 flex h-fit max-w-[70ch] flex-col gap-4 rounded-md bg-white p-6 shadow-container sm:m-0 sm:px-2 tb:px-6">
      <header>
        <h1 className="text-2xl font-bold md:text-6xl">
          Our Story <span className="text-primary-900">DevWizard</span>
        </h1>
      </header>
      <p className="text-lg tb:text-xl">
        We&apos;re a group of self-taught developers who understand the
        challenges of learning to code, especially when just starting out.
        <br />
        <br />
        The tech world can be overwhelming, with its vast array of options like
        Frontend, Backend, DevOps, Fullstack, and more.
        <br />
        <br />
        The various naming conventions can add to the confusion.
        <br />
        <br />
        As experienced developers ourselves, we&apos;ve decided to create a
        website to assist new developers with these questions.
        <br />
        <br />
        Whether you&apos;re just beginning your coding journey or already in the
        industry, we aim to keep you updated on the latest tech trends and
        provide helpful tips.
        <br />
        <br />
        Excitingly, we&apos;re working on a feature that will soon connect
        developers worldwide.
        <br />
        <br />
        This platform will bring developers of all levels together, offering
        opportunities to gain valuable experience, learn new skills, and connect
        with like-minded individuals who share your passion for coding! Stay
        tuned for this upcoming feature that promises to enhance your learning
        and networking experience.
      </p>
    </section>
  </div>
);
// flex flex-col gap-2 pb-8 text-lg sm:px-2 tb:px-4 tb:text-xl
export default OurStory;
