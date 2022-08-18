import React from "react";
import { Todo } from "../model";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
};

const TodoList = ({
  todos,
  setTodos,
  setCompletedTodos,
  completedTodos,
}: Props) => {
  return (
    <div className="flex w-full" id="container">
      <div
        id="todolist"
        className="flex justify-evenly flex-wrap bg-teal-700 m-3 rounded-lg mt-6"
      >
        {todos.map((todoItem) => (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
