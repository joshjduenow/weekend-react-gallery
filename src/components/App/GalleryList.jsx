import GalleryItem from "./GalleryItem";

function GalleryList({ gallery }) {
  console.log(gallery);

  return (
    <>
      <h2 data-testid="galleryList">Mac & Cheese:</h2>
      <ul>
        <img style={{ width: 150, height: 150 }} src="images/bucket_mac.jpeg" />
        <button>Ok</button>
        <img style={{ width: 150, height: 150 }} src="images/green_mac.jpeg" />
        <button>Ok</button>
        <img
          style={{ width: 150, height: 150 }}
          src="images/sheet_pan_thick.jpeg"
        />
        <button>Ok</button>
        <img
          style={{ width: 150, height: 150 }}
          src="images/sheet_pans_mac.jpeg"
        />
        <button>Ok</button>
        <img
          style={{ width: 150, height: 150 }}
          src="images/shredded_cheese.jpeg"
        />
        <button>Ok</button>
        <img
          style={{ width: 150, height: 150 }}
          src="images/singles_mac.jpeg"
        />
        <button>Ok</button>
      </ul>
    </>
  );
}
//{cereals.map((cereal) => {return <CerealItem key={cereal.id} cereal={cereal} />;})

export default GalleryList;
