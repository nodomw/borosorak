import { receptek } from "../recept";

function List() {
  return (
    <div>
      <h1>Receptek</h1>
      <ul>
        {receptek.map((recept) => (
          <li key={recept.id}>
            {recept.nev} - {recept.kateg}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
