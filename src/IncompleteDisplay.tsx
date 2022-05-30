import React, { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplay: FC<display> = (props) => {
  const incompleteCount = useSelector((s: any) => {
    console.log(s);
    return s.incomplete;
  });

  return (
    <h1>
      Incomplete :<span className="text-2xl ml-1">{incompleteCount}</span>
    </h1>
  );
};

export default IncompleteDisplay;
