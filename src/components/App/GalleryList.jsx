import GalleryItem from "./GalleryItem";

function GalleryList({ photo, getList }) {
  return (
    <div 
        
        data-testid="galleryList" 
        className="galleryList"
        >
      {photo.map((item) => {
        return (
          <GalleryItem
            key={item.id}
            id={item.id}
            url={item.url}
            title={item.title}
            description={item.description}
            likes={item.likes}
            getList={getList}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;