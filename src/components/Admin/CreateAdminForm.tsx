"use client";

import Input from "components/Post/Input";
import { useState } from "react";

function CreateAdminForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/admin/create", {
      method: "POST",
      body: JSON.stringify({ email, password, passwordConfirm }),
    });
    console.log(res);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Input
        value={passwordConfirm}
        placeholder="Confirm Password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
      />
      <button className="border-2 border-black py-2 px-4" type="submit">
        Submit
      </button>
    </form>
  );
}

export default CreateAdminForm;
