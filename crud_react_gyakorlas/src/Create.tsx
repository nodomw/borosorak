import {
  type User,
  AddUser,
  GetApiUsers,
} from "./Api/Connection";

import { useState } from "react";

function Create() {
  const [user, setUser] = useState<User>();

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();
    if (user) {
      // get data from form
      const data = new FormData(
        e.target as HTMLFormElement,
      );
      setUser({
        id: Number(data.get("id")),
        Toke: Number(data.get("toke")),
        Aktiv: data.get("aktiv") === "on",
        Szekhely: String(data.get("szekhely")),
        Megnevezes: String(
          data.get("megnevezes"),
        ),
      });

      await AddUser(user);
      const users = await GetApiUsers(undefined);
      console.log(users);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" />
        <input type="text" name="toke" />
        <input type="checkbox" name="aktiv" />
        <input type="text" name="szekhely" />
        <input type="text" name="megnevezes" />
      </form>
    </div>
  );
}

export default Create;
