import CheckBox from "./CheckBox";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FC } from "react";
type Props = {
  todo: any;
  onStatusChange: any;
  onDelete: any;
  done: boolean;
};
const TodoRow: FC<Props> = (props: any) => {
  const onDelete = () => {
    props.onDelete(props.todo);
  };
  const onCheckboxChange = () => {
    props.onStatusChange(props.todo);
  };

  return (
    <div className="flex items-center">
      <CheckBox checked={props.done} onChange={onCheckboxChange} />
      <span className="ml-3 mr-3 font-medium text-white capitalize">
        {props.todo.title}
      </span>
      <RiDeleteBin6Fill onClick={onDelete} />
    </div>
  );
};
export default TodoRow;
