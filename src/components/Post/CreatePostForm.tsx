"use client";

import { useState } from "react";
import Input from "./Input";
import pocket from "lib/PocketBaseSingleton";

function CreatePostForm() {
  const [done, setDone] = useState(false);
  const [title,setTitle]= useState("");
  const [body,setBody] = useState('');
  const onSubmit = async (e:any) => {
    e.preventDefault();
   
    const data={title,body};
    const res = await fetch("http://localhost:3000/api/post/create",{
     method:"POST",
     body:JSON.stringify(data),
  })
    
  
    if (res.status) {
        setDone(true);
    }

    
  };

  return (
    <div className="w-7/12 m-auto">
      <p>{done?"Done!":""}</p>
      <form onSubmit={onSubmit}>
        <Input type="text" value={pocket.authStore.model?.email} readOnly   />
        <Input type="text" value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}   />
        <Input type="text" value={body} placeholder="Body" onChange={(e)=>setBody(e.target.value)}   />
        <button type="submit" className="border-2 border-black py-2 px-4">Submit</button>
      </form>
    </div>
  );
}

export default CreatePostForm;
