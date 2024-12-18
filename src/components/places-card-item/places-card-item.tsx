import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { PlaceCardAttributes } from '../../style-options';
import { ListOfferType } from '../../types/offers';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';

type PlaceCardItemProps = {
    cardPlace: ListOfferType;
    pageNames: string;
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

function PlaceCardItem({ cardPlace, pageNames }: PlaceCardItemProps): JSX.Element {

  return (
    <article className={`${pageNames}__card place-card`}>
      {cardPlace.isPremium && <Mark markClass='place-card' />}
      <div className={`${pageNames}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img className='place-card__image' src={cardPlace.previewImage}
            width={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].width : PlaceCardAttributes['cities'].width}
            height={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].height : PlaceCardAttributes['cities'].height}
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
          <BookmarkButton bookmarkClass='place-card' cardPlace = {cardPlace}/>
        </div>
        <Rating
          ratingClass='place-card'
          ratingValue = {cardPlace.rating}
        />
        <h2 className='place-card__name'>
          <Link to={AppRoute.Offer}>{cardPlace.title}</Link>
        </h2>
        <p className='place-card__type'>{cardPlace.type}</p>
      </div>
    </article>
  );
}
export default PlaceCardItem;

