import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "./GalleryList";

function App() {
  useEffect(() => {
    fetchGallery();
  }, []); // 👈 the "stop sign"

  const [gallery, setGallery] = useState([]);

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        setGallery(response.data);
      })
      .catch((error) => {
        console.log("fetchGallery fail:", error);
      });
  };
  return (
      <div data-testid="app">
        <GalleryList />
      </div>

   
  );
}

export default App;
