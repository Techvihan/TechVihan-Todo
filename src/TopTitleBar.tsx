import { FC, HtmlHTMLAttributes } from "react";
import CompleteDisplay from "./DoneDisplay";
import IncompleteDisplay from "./IncompleteDisplay";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const TopTitleBar: FC<Props> = (props) => {
  return (
    <div className="py-4 px-32 shadow-lg ">
      <span className="text-xl font-medium">TechVihan's todo</span>
      <div className=" flex justify-end space-x-10">
        <IncompleteDisplay />
        <span className="text-3xl">|</span>
        <CompleteDisplay />
      </div>
    </div>
  );
};
export default TopTitleBar;
