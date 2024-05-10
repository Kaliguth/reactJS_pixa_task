import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Pixa() {
  const [query] = useSearchParams();
  const [pix_ar, setPixAr] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const url = `https://pixabay.com/api/?key=43398094-fdd8960185f4f8fa04f018de2&q=${query.get(
        "s"
      )}&per_page=4&page=${Math.floor(Math.random() * 10) + 1}&image_type=photo`;
      const res = await fetch(url);
      const data = await res.json();
      console.table(data.hits);

      setPixAr(data.hits);
    };

    getApi();
  }, [query, forceUpdate]);

  return (
    <div className="container">
      <h2>
        <u>
          <b>Pixa</b>
        </u>
      </h2>
      <hr />
      <div>
        <input
          className="pb-1 mt-2 rounded"
          id="inputBox"
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        ></input>
        <br />
        <button
          className="mt-2 mb-2 rounded"
          onClick={() => {
            if (searchInput !== "") {
              query.set("s", searchInput);
              console.log("query:", query.get("s"));
              window.history.pushState({}, "", `?s=${searchInput}`); // Force path query change
              setSearchInput(""); // Clear search input box
              setForceUpdate((prev) => !prev); // Force component rerender
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="container text-center">
        <h3 className="mt-5 mb-4">Pictures:</h3>
        <ul className="list-inline">
          {pix_ar.map((item) => {
            const openImageInNewTab = (e) => {
              e.preventDefault();
              window.open(item.largeImageURL);
            };

            return (
              <li key={item.id} className="list-inline-item me-3">
                <Link to="#" onClick={openImageInNewTab}>
                  <img
                    className="border border-dark border-3 rounded mb-2"
                    src={item.webformatURL}
                    alt={item.tags}
                    height="200"
                    width="250"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
