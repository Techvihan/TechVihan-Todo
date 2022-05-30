import { FC, HtmlHTMLAttributes } from "react";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const H1: FC<Props> = (props: any) => {
  return (
    <div>
      <span className="text-3xl font-bold leading-tight text-gray-900">
        {props.children}
      </span>
    </div>
  );
};
export default H1;
