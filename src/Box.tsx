import { FC, HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const Box: FC<Props> = (props: any) => {
  return (
    <div className="bg-gray-300 shadow sm:rounded-lg space-y-4 px-4 py-5">
      {props.children}
    </div>
  );
};
export default Box;
