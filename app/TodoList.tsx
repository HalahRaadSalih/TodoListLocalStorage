"use client";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

export type Item = {
  id: number;
  text: string;
  checked: boolean;
};

interface TodoListProps {
  items: Item[];
  onAddItem: (text: string) => void;
  onRemoveItem: (idx: number) => void;
  onCheckedItem: (item: Item, idx: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { items, onAddItem, onRemoveItem, onCheckedItem } = props;
  return (
    <>
      <h1 className="text-2xl mb-2">Todo</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          {items.map((item, idx) => (
            <TodoItem
              key={idx}
              item={item}
              onDelete={() => onRemoveItem(idx)}
              onChecked={() => onCheckedItem(item, idx)}
            />
          ))}
        </div>
        <AddItem onAdd={(text) => onAddItem(text)} />
      </div>
    </>
  );
};

export default TodoList;
