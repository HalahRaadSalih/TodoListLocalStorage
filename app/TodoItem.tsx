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
  // the styling applied when an item is checked, implies that an item is disabled and can no longer be unchecked or interacted with
  // which does not deliver a good user experience, we can improve it by removing the opacity

  // because the items state lives in the parent component <Page /> whenever an item is checked/unchecked
  // each ToDoItem will be rerender, which is not effient, we can deal with this by memozing this component to only rerender
  // if item.checked has changed since the last render
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
