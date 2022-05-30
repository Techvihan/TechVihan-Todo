import { FC, HtmlHTMLAttributes } from "react";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const H3: FC<Props> = (props: any) => {
  return (
    <div>
      <span className="text-lg font-medium leading-6 text-gray-900">
        {props.children}
      </span>
    </div>
  );
};
export default H3;
