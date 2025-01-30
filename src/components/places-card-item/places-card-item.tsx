import { Link, generatePath } from 'react-router-dom';
import { ListOfferType } from '../../types/offers';
import { AppRoute } from '../../constants';
import { PlaceCardAttributes } from '../../style-options';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import { memo } from 'react';

type PlaceCardItemProps = {
    cardPlace: ListOfferType;
    pageNames: string;
    onActiveOfferChange?: (id: string | null) => void;
}
type MarkProps ={
    markClass: string;
  }


function Mark({markClass}: MarkProps):JSX.Element{
  return(
    <div className={`${markClass}__mark`}>
      <span>Premium</span>
    </div>
  );
}

const PlaceCardItem = memo(({ cardPlace, pageNames, onActiveOfferChange}: PlaceCardItemProps): JSX.Element =>(
  <article
    className={`${pageNames}__card place-card`}
    onMouseEnter = {() => onActiveOfferChange && onActiveOfferChange(cardPlace.id)}
    onMouseLeave = {() => onActiveOfferChange && onActiveOfferChange(null)}
  >

    {cardPlace.isPremium && <Mark markClass='place-card' />}
    <div className={`${pageNames}__image-wrapper place-card__image-wrapper`}>
      <Link to={generatePath(AppRoute.Offer, {offerId: cardPlace.id})}>
        <img className='place-card__image' src={cardPlace.previewImage}
          width={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].Width : PlaceCardAttributes['cities'].Width}
          height={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].Height : PlaceCardAttributes['cities'].Height}
          alt="Place image"
        />
      </Link>
    </div>
    <div className={`${cardPlace.isFavorite ? 'favorites__card-info' : ''} place-card__info`}>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{cardPlace.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <BookmarkButton bookmarkClass='place-card'
          offerId = {cardPlace.id} isFavorite = {cardPlace.isFavorite}
        />
      </div>
      <Rating
        ratingClass='place-card'
        ratingValue = {cardPlace.rating}
      />
      <h2 className='place-card__name'>
        <Link to={generatePath(AppRoute.Offer, {offerId: cardPlace.id})}>{cardPlace.title}</Link>
      </h2>
      <p className='place-card__type'>{`${cardPlace.type.charAt(0).toUpperCase() + cardPlace.type.slice(1)}`}</p>
    </div>
  </article>
)
);

PlaceCardItem.displayName = 'PlaceCardItem';

export default PlaceCardItem;


