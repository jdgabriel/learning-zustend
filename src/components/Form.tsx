import React from "react";
import { useUserStore } from "../store/user";

export function Form() {
  const users = useUserStore((state) => state.addUser);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    users({ name, email });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="email" placeholder="E-mail" />
        <button type="submit">Send user</button>
      </form>
    </div>
  );
}
