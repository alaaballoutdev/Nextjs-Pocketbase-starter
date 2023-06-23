"use client";

import { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data = { title, body };
    const res = await fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status) {
      router.back();
    }
  };

  return (
    <div className="w-7/12 m-auto">
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
          className="border rounded p-4 block mb-10 w-full h-56"
        />
        <button type="submit" className="border-2 border-black py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
