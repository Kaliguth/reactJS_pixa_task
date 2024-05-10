import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [search, setSearch] = useState("");

  return (
    <div className="text-center">
      <h2><u><b>Home</b></u></h2>
      <h4>Pixabay search:</h4>
      <input
        className="pb-1 rounded"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <br/>
      <Link to={`/pixa?s=${search}`}>
        <button className="btn btn-warning mt-2">Search</button>
      </Link>
    </div>
  );
}
