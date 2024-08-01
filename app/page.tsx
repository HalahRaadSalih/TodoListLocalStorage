"use client";
import React, { useCallback, useEffect, useReducer } from "react";
import TodoList, { Item } from "./TodoList";

const INITIAL_ITEMS = [{ id: 0, text: "Do the laundry", checked: false }];
const ITEMS_KEY = "items";

const enum ItemActionType {
  add = "add",
  remove = "remove",
  update = "update",
}

interface ItemAction {
  type: ItemActionType;
  idx: number;
  text?: string;
  checked?: boolean;
}

const itemsReducer = (items: Item[], action: ItemAction) => {
  const { type, idx, checked = false, text = "" } = action;
  switch (type) {
    case ItemActionType.add: {
      return [
        ...items,
        {
          text,
          id: idx,
          checked,
        },
      ];
    }
    case ItemActionType.update: {
      const itemToUpdate = items.at(idx);
      if (!itemToUpdate) {
        return items;
      }
      itemToUpdate.checked = checked;
      return [...items.slice(0, idx), itemToUpdate, ...items.slice(idx + 1)];
    }

    case ItemActionType.remove: {
      // when an item is removed, do we need to update the ids of the remaining items with new index value
      return [...items.slice(0, idx), ...items.slice(idx + 1)];
    }
  }
};

interface useItemsLocalStorageRetrun {
  items: Item[];
  addItem: (text: string) => void;
  updateItem: (item: Item, idx: number) => void;
  removeItem: (idx: number) => void;
}

const useItemsLocalStorage = (): useItemsLocalStorageRetrun => {
  // this hook is added to isolate the business logic of adding/removing/updating items from component
  // this enables us to have better speratation of concerns
  // and easily mock and test todos and local storage updates without the component

  if (!localStorage.getItem(ITEMS_KEY)) {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(INITIAL_ITEMS));
  }

  const initialItems = JSON.parse(localStorage.getItem(ITEMS_KEY) ?? "");
  // useReducer is used here for code orgnaization and making debugging easier. We can due without it
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  const addItem = (text: string) => {
    const nextId = items[items.length - 1] ? items[items.length - 1].id + 1 : 0;
    dispatch({
      type: ItemActionType.add,
      idx: nextId,
      text,
      checked: false,
    });
  };
  // we can use useCallback to memo all these event callbacks, but that's useful when there an expensive calculation
  const updateItem = useCallback((item: Item, idx: number) => {
    dispatch({
      type: ItemActionType.update,
      idx,
      checked: !item.checked,
    });
  }, []);

  const removeItem = (idx: number) => {
    const item = items.at(idx);
    dispatch({
      type: ItemActionType.remove,
      idx,
    });
  };

  useEffect(() => {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
  }, [items]);

  return { items, addItem, updateItem, removeItem };
};

export default function Home() {
  const { items, addItem, updateItem, removeItem } = useItemsLocalStorage();

  return (
    <main>
      <div>
        <TodoList
          items={items}
          onAddItem={(text) => {
            addItem(text);
          }}
          onRemoveItem={(idx) => {
            removeItem(idx);
          }}
          onCheckedItem={(item, index) => {
            updateItem(item, index);
          }}
        />
      </div>
    </main>
  );
}
