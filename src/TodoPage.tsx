import React, { FC, HtmlHTMLAttributes } from "react";
import Container from "./Container";
import H1 from "./H1";
import H3 from "./H3";
import TodoForm from "./TodoForm";
import Button from "./Button";
import TodoRow from "./TodoRow";
import {
  TODO_COMPLETE,
  TODO_TICK_COMPLETE,
  TODO_TICK_INCOMPLETE,
  TODO_INCOMPLETE,
} from "./Action";
import { useDispatch } from "react-redux";

let i: any = localStorage.getItem("id_index");
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const TodoPage: FC<Props> = (props) => {
  const [todoFormVisible, setTodoFormVisiblity] = React.useState(false);

  const savedTodoList =
    JSON.parse(localStorage.getItem("todolist") || "[]") || [];

  const [todoList, setTodoList] = React.useState(savedTodoList);

  const updateTodoList = (todoList: any) => {
    setTodoList(todoList);

    localStorage.setItem("todolist", JSON.stringify(todoList));
  };

  const completeTodoList = todoList.filter((t: any) => t.done);
  const incompleteTodoList = todoList.filter((t: any) => !t.done);

  const showTodoForm = () => setTodoFormVisiblity(true);

  const hideTodoForm = () => setTodoFormVisiblity(false);

  const addTodo = (todoTitle: any) => {
    localStorage.setItem("id_index", "++i");
    updateTodoList([...todoList, { id: i, title: todoTitle, done: false }]);
  };

  const onTodoDelete = (todo: any) => {
    const newTodoList = todoList.filter((t: any) => t.id !== todo.id);
    updateTodoList(newTodoList);
  };

  const markAsDone = (todo: any) => {
    todo.done = true;
    updateTodoList([...todoList]);
    updateCompTodo();
    updateCompTickTodo();
  };

  const markAsNotDone = (todo: any) => {
    todo.done = false;
    updateTodoList([...todoList]);
    updateIncompTodo();
    updateIncompTickTodo();
  };
  const dispatch = useDispatch();
  const updateCompTodo = () => {
    dispatch({ type: TODO_COMPLETE });
  };

  const updateIncompTodo = () => {
    dispatch({ type: TODO_INCOMPLETE });
  };

  const updateCompTickTodo = () => {
    dispatch({ type: TODO_TICK_COMPLETE });
  };

  const updateIncompTickTodo = () => {
    dispatch({ type: TODO_TICK_INCOMPLETE });
  };

  return (
    <>
      <Container>
        <H1>Things to get done</H1>
        <H3>Things to do</H3>

        {!incompleteTodoList.length && <div>No work to do!</div>}

        {incompleteTodoList.map((t: any) => (
          <TodoRow
            todo={t}
            onStatusChange={markAsDone}
            key={t.id}
            onDelete={onTodoDelete}
            done={false}
          ></TodoRow>
        ))}

        {!todoFormVisible && (
          <Button onClick={showTodoForm} border="highlight">
            Add a todo
          </Button>
        )}

        {todoFormVisible && (
          <TodoForm onClose={hideTodoForm} onCreate={addTodo} />
        )}

        {!completeTodoList.length && <div>No incomplete todos!</div>}

        {completeTodoList.map((t: any) => (
          <TodoRow
            todo={t}
            onStatusChange={markAsNotDone}
            key={t.id}
            done={true}
            onDelete={onTodoDelete}
          ></TodoRow>
        ))}
      </Container>
    </>
  );
};

export default TodoPage;
