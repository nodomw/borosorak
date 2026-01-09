import {
  type User,
  SetUser,
  DeleteUser,
} from "./Api/Connection";

function UserComponent({ user }: { user: User }) {
  const handleUpdate = async () => {
    const updatedUser: User = {
      ...user,
      Megnevezes: user.Megnevezes + " Updated",
    };
    const result = await SetUser(
      user.id,
      updatedUser,
    );
    console.log("Updated User:", result);
  };

  const handleDelete = async () => {
    const result = await DeleteUser(user.id);
    console.log("Deleted User:", result);
  };

  return (
    <div>
      <h3>{user.Megnevezes}</h3>
      <p>ID: {user.id}</p>
      <p>Tőke: {user.Toke}</p>
      <p>Aktív: {user.Aktiv ? "Igen" : "Nem"}</p>
      <p>Szekhely: {user.Szekhely}</p>
      <button onClick={handleUpdate}>
        Update User
      </button>
      <button onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
}

export default UserComponent;
