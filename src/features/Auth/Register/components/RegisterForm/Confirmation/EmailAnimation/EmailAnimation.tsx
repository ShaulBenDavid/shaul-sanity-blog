import React from "react";
import S from "./EmailAnimation.module.css";

export const EmailAnimation = (): JSX.Element => (
  <div aria-hidden>
    <div className={S.container}>
      <div className={S.envelope}>
        <div className={S.paper}>
          <ul className={S.list}>
            <li className={S.listItem} />
            <li className={S.listItem} />
            <li className={S.listItem} />
            <li className={S.listItem} />
          </ul>
          <div className={S.noti}>1</div>
        </div>
      </div>
      <div className={S.openEmail} />
    </div>
  </div>
);
