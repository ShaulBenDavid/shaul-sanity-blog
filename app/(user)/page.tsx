import React from "react";
import { Intro } from "@/src/features/Home/Intro";
import { HomeContent } from "@/src/features/Home/HomeContent";

export const revalidate = 86400;

const Home = () => (
  <>
    <Intro />
    <HomeContent />
  </>
);

export default Home;
