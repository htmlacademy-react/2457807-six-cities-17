// import BookmarkButton from '../../bookmark-button/bookmark-button';
// import Mark from '../../common/mark/mark';
// import Rating from '../../common/rating/rating';
import { PlaceCardAttributes, RatingAttributes } from '../../constans';
import { ListOfferType } from '../../types/list-offer';
import BookmarkButton from '../bookmark-button/bookmark-button';


type PlaceCardItemProps = {
    cardPlace: ListOfferType;
    pageNames: string;
}
type MarkProps ={
    markClass: string;
  }
  type RatingProps = {
    ratingClass: string;
    ratingValue: number;
  }

function Rating({ratingClass, ratingValue}: RatingProps):JSX.Element{
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={{width: ratingValue * 10 * 2}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {RatingAttributes[ratingClass].ratingVisibility &&
        <span className="offer__rating-value rating__value">{ratingValue}</span>}
    </div>
  );
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
        <a href="#">
          <img className='place-card__image' src={cardPlace.previewImage}
            width={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].width : PlaceCardAttributes['cities'].width}
            height={pageNames === 'favorites' ? PlaceCardAttributes['favorites'].height : PlaceCardAttributes['cities'].height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardPlace.isFavorite ? 'favorites__card-info' : ''}place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{cardPlace.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkButton bookmarkClass='place-card' />
        </div>
        <Rating
          ratingClass='place-card'
          ratingValue = {cardPlace.rating}
        />
        <h2 className='place-card__name'>
          <a href="#">{cardPlace.title}</a>
        </h2>
        <p className='place-card__type'>{cardPlace.type}</p>
      </div>
    </article>
  );
}
export default PlaceCardItem;
