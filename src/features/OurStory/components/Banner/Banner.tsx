import React from "react";
import Image from "next/image";
import BoyWizardImg from "./assets/wizardBoy.png";
import S from "./Banner.module.css";

export const Banner = (): JSX.Element => (
  <div className={S.cubeBackground}>
    <Image
      src={BoyWizardImg}
      alt=""
      sizes="200px"
      height={200}
      width={200}
      className="mt-[-20px] scale-x-[-1]"
    />
  </div>
);
