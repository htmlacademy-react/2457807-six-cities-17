import { memo } from 'react';

type OfferGalleryProps = {
    imageGallery: string;
  }

const OfferGallery = memo(({imageGallery}:OfferGalleryProps):JSX.Element =>(
  <div className="offer__image-wrapper">
    <img
      className="offer__image"
      src={imageGallery}
      alt="Photo studio"
    />
  </div>
));

OfferGallery.displayName = 'OfferGallery';

export default OfferGallery;

