import { useState } from 'react';

function GalleryItem({gallery}) {
  const [isGalleryItem, setIsGalleryItem] = useState('')

  const toggleGalleryItem = () => {
    setIsGalleryItem(!isGalleryItem)
  }

  const displayText = () => {
    if (isGalleryItem) {
      return (
        <>
          NOM NOM NOM
          <br/>
          NOM NOM NOM
        </>
      )
    } else {
      return (
        <>
          {gallery.url}
          <br/>
          <em>{gallery.description}</em>
        </>
      )
    }
  }

  return (
    <li
      data-testid="galleryItem"
      onClick={toggleGalleryItem}
      className={cereal.isTasty ? 'tasty' : ''}
    >
      {displayText()}
    </li>
  )
}

export default GalleryItem;
