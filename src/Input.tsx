import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;
const Input: FC<Props> = (props: any) => {
  return (
    <input
      type="text"
      className="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default Input;
