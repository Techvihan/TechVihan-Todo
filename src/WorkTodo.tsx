import Button from "./Button";
function WorkToDo(props: any) {
  return (
    <div className="p-2 mt-2 bg-gray-300">
      <li className={"ml-8"}>{props.name} </li>
      <Button theme="2nd"></Button>
    </div>
  );
}
export default WorkToDo;
