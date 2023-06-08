"use client";

import { useCallback, useRef, useState } from "react";
import { GreenButton } from "./Button";
import dynamic from "next/dynamic";
import React from "react";

const placeholders = [
  "Pay bills for the month",
  "Organize and clean out the garage",
  "Make a grocery list and go shopping",
  "Set up a doctor's appointment for a check-up",
  "Research and book a vacation destination",
  "Start a new exercise routine",
  "Update resume and start job hunting",
  "Call mom and dad to catch up",
];

const AddItem = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [value, setValue] = useState("");
  const placeholder = placeholders[placeholderIdx];

  const add = useCallback(() => {
    onAdd(value);
    setValue("");
    setPlaceholderIdx((idx) => (idx + 1) % placeholders.length);
  }, [onAdd, value]);

  return (
    <div className={`flex justify-between items-center gap-1 text-sm w-full`}>
      <input
        value={value}
        className="flex-1 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            if (value === "") {
              setValue(placeholder);
              e.preventDefault();
            }
          }

          if (e.key === "Enter") {
            add();
          }
        }}
        type="text"
        name="search"
      />
      <GreenButton
        onClick={(e) => {
          e.stopPropagation();
          add();
        }}
      >
        add
      </GreenButton>
    </div>
  );
};

export default AddItem;
