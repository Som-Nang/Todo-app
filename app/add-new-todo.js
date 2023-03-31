"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          onSubmit={handleSubmit}
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}
