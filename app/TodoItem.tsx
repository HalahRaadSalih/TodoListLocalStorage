"use client";
import { RedButton } from "./Button";
import { Item } from "./TodoList";

interface TodoItemProps {
  item: Item;
  onDelete: () => void;
  onChecked: (item: Item) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const { item, onDelete, onChecked } = props;
  const { checked, text } = item;
  return (
    <div
      onClick={() => {
        onChecked(item);
      }}
      className={`flex justify-between items-center gap-1 text-sm w-full cursor-pointer ${
        checked ? "opacity-50" : ""
      }`}
    >
      <input checked={checked} className="cursor-pointer" type="checkbox" />
      <span className={`flex-1 ${checked ? "line-through" : ""}`}>{text}</span>
      <RedButton
        color="red"
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      >
        delete
      </RedButton>
    </div>
  );
};

export default TodoItem;
