import React from "react";

interface DetailProps {
  icon: JSX.Element;
  value: string;
  href?: string;
}

export const Detail = ({ icon, value, href }: DetailProps): JSX.Element => {
  const renderDetail = (): JSX.Element => (
    <span className="flex flex-row items-end gap-2 text-wizard-grey duration-150 group-hover:text-primary-900">
      {icon}
      <span className="line-clamp-1 text-ellipsis text-sm font-medium capitalize">
        {value}
      </span>
    </span>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group">
      {renderDetail()}
    </a>
  ) : (
    renderDetail()
  );
};
