"use client";

import { useState } from "react";
import { RedButton } from "./Button";

const TodoItem = ({
  item,
  onDelete,
}: {
  item: string;
  onDelete: () => void;
}) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((c) => !c);

  return (
    <div
      onClick={() => toggleChecked()}
      className={`flex justify-between items-center gap-1 text-sm w-full cursor-pointer ${
        checked ? "opacity-50" : ""
      }`}
    >
      <input checked={checked} className="cursor-pointer" type="checkbox" />
      <span className={`flex-1 ${checked ? "line-through" : ""}`}>{item}</span>
      <RedButton
        color="red"
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      >
        del
      </RedButton>
    </div>
  );
};

export default TodoItem;
