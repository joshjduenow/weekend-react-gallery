import { useState } from "react";
import axios from "axios";

function GalleryItem({ id, url, title, description, likes, getList }) {
  const [seeDesc, setSeeDesc] = useState(false);

  const toggleSeeDesc = () => {
    setSeeDesc(!seeDesc);
  };

  const addLike = () => {
    console.log("hi", id);
    axios
      .put(`/gallery/likes/${id}`)
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating like");
        console.log(err);
      });
  };

  const shownContent = () => {
    if (seeDesc) {
      return (
        <div
          data-testid="description"
          style={{ height: 200, width: 200, textAlign: "center"}}
        >
          {description}
        </div>
      );
    } else {
      return <img src={url} height={300} width={300} />;
    }
  };

  return (
    <div 
        
        data-testid="galleryItem" 
        className="galleryItem"
    >
      <h4 style={{ width: 300, textAlign: "center"}}>{title}</h4>
      <div 
        data-testid="toggle" 
        onClick={toggleSeeDesc}
      >
        {shownContent()}
      </div>
      <div>
        {likes} Nice👍{" "}
        <button 
            data-testid="like" 
            class="btn btn-warning" 
            onClick={addLike}>
            Ok 🧀
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
