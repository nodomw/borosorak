// search in data
import { useState } from "react";
function Search() {
  const [query, setQuery] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setQuery(value);
    // onchanged(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
