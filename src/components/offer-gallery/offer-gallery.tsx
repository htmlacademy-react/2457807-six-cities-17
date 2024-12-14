type OfferGalleryProps = {
    imageGallery: string;
  }

function OfferGallery({imageGallery}:OfferGalleryProps):JSX.Element{
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={imageGallery}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferGallery;
