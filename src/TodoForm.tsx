import React from "react";
import Box from "./Box";
import Button from "./Button";
import Input from "./Input";
import H3 from "./H3";
function TodoForm(props: any) {
  const [inputValue, updateInputValue] = React.useState("");

  const onInputChange = (event: any) => {
    updateInputValue(event.target.value);
  };

  const saveToDo = () => {
    props.onCreate(inputValue);
    console.log("write a code");
    props.onClose();
  };
  return (
    <Box>
      <H3>Create a todo</H3>
      <div className="w-full sm:w-80">
        <Input
          placeholder="Write ToDo"
          value={inputValue}
          onChange={onInputChange}
        ></Input>
      </div>
      <div className="space-y-4 sm:space-x-4">
        <Button onClick={saveToDo}>Save</Button>
        <Button onClick={props.onClose} theme="2nd">
          Cancel
        </Button>
      </div>
    </Box>
  );
}
export default TodoForm;
