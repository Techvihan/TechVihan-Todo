import { FC, HtmlHTMLAttributes } from "react";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const Container: FC<Props> = (props: any) => {
  return (
    <div className="py-4 px-32">
      <span>{props.children}</span>
    </div>
  );
};
export default Container;
