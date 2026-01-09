import { useParams } from "react-router-dom";
import { receptek } from "../recept";

function Detail() {
  const { id } = useParams();
  const recept = receptek.find(
    (r) => r.id === id,
  );

  return (
    <div>
      <h1>Recept részletei - {id}</h1>
      <p>Itt jelennek meg a recept részletei.</p>
      {recept ? (
        <div>
          <h2>{recept.nev}</h2>
          <p>{recept.leiras}</p>
        </div>
      ) : (
        <p>Recept nem található.</p>
      )}
    </div>
  );
}
export default Detail;
