import { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const DoneDisplay: FC<Props> = (props) => {
  const completeCount = useSelector((s: any) => s.completed);
  return (
    <h1>
      Completed :<span className="text-2xl ml-1">{completeCount}</span>
    </h1>
  );
};
export default DoneDisplay;
