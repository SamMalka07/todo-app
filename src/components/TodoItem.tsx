import React, { FormEvent, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

type Props = {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todoItem, todos, setTodos }: Props) => {
  const { id, todo, isDone } = todoItem;

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);

  const handleSubmit = (e: FormEvent, id: number) => {
    e.preventDefault();

    let newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, todo: editTodo };
      }
      return item;
    });
    setTodos(newTodos);
    setEdit(false);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, id)}
      className="flex justify-between  items-center bg-green-300 p-5 my-4 rounded-3xl"
      id="form-single"
    >
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full mr-1 rounded-lg px-1 py-1"
        />
      ) : (
        <span>{todo}</span>
      )}

      <div className="flex">
        <span id="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span id="icon">
          <AiFillDelete onClick={() => handleDelete(id)} />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
