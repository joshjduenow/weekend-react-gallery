import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "./GalleryList";

function App() {
  const [photo, setPhoto] = useState([]);

  const getList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((err) => {
        alert("error getting list");
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div 
      data-testid="app"
      >
      <header class="p-5 bg-primary text-warning text-center">
        <h1>Mac & Cheese Gallery</h1>
      </header>
    
      <h2>Let's See your Mac & Cheese</h2>

      <GalleryList photo={photo} getList={getList} />
    </div>
  );
}

export default App;