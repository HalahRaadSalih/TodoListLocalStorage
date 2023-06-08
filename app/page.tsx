import { useState } from "react";

import TodoItem from "./TodoItem";
import Button from "./Button";
import AddItem from "./AddItem";
import TodoList from "./TodoList";

export default function Home() {
  return (
    <main>
      <div>
        <TodoList />
      </div>
    </main>
  );
}
