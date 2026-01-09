import { Navigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (query) {
    return (
      <Navigate
        to={`/receptek?search=${encodeURIComponent(query)}`}
      />
    );
  } else {
    return <Navigate to="/receptek" />;
  }
}
export default Search;
