import React from "react";
import { camelCaseToWords } from "@/src/utils";

interface PositionProps {
  type: string;
  value: string;
}

export const Position = ({ type, value }: PositionProps): JSX.Element => (
  <div key={type} className="flex-1">
    <strong className="font-semibold opacity-70">
      <p className="line-clamp-1 text-ellipsis text-sm">
        {camelCaseToWords(type)}
      </p>
    </strong>
    <p className="line-clamp-1 text-ellipsis capitalize">{value}</p>
  </div>
);
