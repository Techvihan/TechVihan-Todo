import { ButtonHTMLAttributes, FC } from "react";
type Props = {
  theme?: "2nd";
  border?: "highlight";
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<Props> = (props: any) => {
  let themeClass =
    " bg-yellow-400 border-yellow-500 hover:bg-yellow-500 text-white";

  let radiusClass = "rounded-md";

  if (props.border === "highlight") {
    radiusClass = "rounded-full";
  }
  if (props.theme === "2nd") {
    themeClass = " bg-white border-gray-300 hover:bg-gray-200 ";
  }

  return (
    <button
      onClick={props.onClick}
      className={
        "inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " +
        themeClass +
        " " +
        radiusClass
      }
    >
      {props.icon && <span className="mr-2 font-bold t"> {props.icon} </span>}
      {props.children}
    </button>
  );
};
export default Button;
