import { useState } from "react";

export default function Search(props) {
    
  const [foodSearch, setSearch] = useState("");

  function handleSearch(e) {
    const foodSearch = e.target.value;

    setSearch(foodSearch);

    props.searchFood(foodSearch);
  }

  return (
    <div>
      <label>Search Food:</label>
      <input
        name="foodName"
        type="text"
        value={foodSearch}
        onChange={handleSearch}
      />
    </div>
  );
}
