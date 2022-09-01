import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMG_URL } from "../../Config.js";
import MainImage from "./Section/MainImage.js";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&languate=en-US&page=1`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies([response.results]);
        setMainMovieImage(response.results[0]);
        console.log(response);
      });
  }, []);
  return (
    <>
      <div style={{ width: "100%", margin: "0" }}>
        {/* Main Image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMG_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>Movies by latest</h2>
          <hr />

          {/* Movie Grid Card */}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Load More</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
