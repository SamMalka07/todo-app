import React, { useRef, useState } from "react";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
      className="w-full px-3 mr-5 flex items-center"
    >
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Enter the task"
        id="input-box"
        className="border-0 w-full rounded-full py-4 px-10 text-2xl"
      />
      <button
        type="submit"
        id="submit-btn"
        className="w-24 font-bold h-12 rounded-full bg-red-600 py-2 absolute right-0 mr-5 text-white hover:bg-red-400"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
