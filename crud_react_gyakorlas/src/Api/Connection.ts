const url = "https://retoolapi.dev/WCTMk4/data";

export type User = {
  id: number;
  Toke: number;
  Aktiv: boolean;
  Szekhely: string;
  Megnevezes: string;
};

export async function GetApiUsers(
  users: number[] | undefined,
): Promise<User[]> {
  const req = fetch(url);
  const res = await req;
  const data: User[] = await res.json();

  if (!users) {
    return data;
  }
  return data.filter((user) =>
    users?.includes(user.id),
  );
}

export async function AddUser(
  data: User,
): Promise<User | undefined> {
  const req = fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req;
  return await res.json();
}

export async function SetUser(
  user: number,
  data: User,
): Promise<User | undefined> {
  const req = fetch(url + "/" + user, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req;
  return await res.json();
}

export async function DeleteUser(
  user: number,
): Promise<User | undefined> {
  const req = fetch(url + "/" + user, {
    method: "DELETE",
  });
  const res = await req;
  return await res.json();
}
