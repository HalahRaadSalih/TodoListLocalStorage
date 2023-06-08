"use client";

import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

type Item = {
  id: number;
  text: string;
};

const TodoList = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 0, text: "Do the laundry" },
  ]);

  const addItem = useCallback(
    (text: string) => {
      setItems((items) => {
        const nextId = items[items.length - 1]
          ? items[items.length - 1].id + 1
          : 0;

        return [
          ...items,
          {
            text,
            id: nextId,
          },
        ];
      });
    },
    [setItems]
  );

  return (
    <>
      <h1 className="text-2xl mb-2">Todo</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          {items.map((item, idx) => (
            <TodoItem
              key={idx}
              item={item.text}
              onDelete={() => {
                setItems([...items.slice(0, idx), ...items.slice(idx + 1)]);
              }}
            />
          ))}
        </div>
        <AddItem onAdd={addItem} />
      </div>
    </>
  );
};

export default TodoList;
