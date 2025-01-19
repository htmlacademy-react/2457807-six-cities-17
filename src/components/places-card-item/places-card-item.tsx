import { Link, generatePath, useNavigate } from 'react-router-dom';
import { ListOfferType } from '../../types/offers';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { PlaceCardAttributes } from '../../style-options';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import { selectAuthorizationStatus } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavorite } from '../../store/api-actions';

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

function PlaceCardItem({ cardPlace, pageNames, onActiveOfferChange}: PlaceCardItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const handleToggleFavoriteClick = () =>{
    if (authorizationStatus !== AuthorizationStatus.Auth){
      return navigate(AppRoute.Login);
    }
    dispatch(toggleFavorite({offerId: cardPlace.id, isFavorite: cardPlace.isFavorite ? 0 : 1}));
  };
  return (
    <article
      className={`${pageNames}__card place-card`}
      onMouseEnter = {() => onActiveOfferChange && onActiveOfferChange(cardPlace.id)}
      onMouseLeave = {() => onActiveOfferChange && onActiveOfferChange(null)}
    >

      {cardPlace.isPremium && <Mark markClass='place-card' />}
      <div className={`${pageNames}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {offerId: cardPlace.id})}>
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
          <BookmarkButton bookmarkClass='place-card'
            cardPlace = {cardPlace}
            onToogleClick = {handleToggleFavoriteClick}
          />
        </div>
        <Rating
          ratingClass='place-card'
          ratingValue = {cardPlace.rating}
        />
        <h2 className='place-card__name'>
          <Link to={generatePath(AppRoute.Offer, {offerId: cardPlace.id})}>{cardPlace.title}</Link>
        </h2>
        <p className='place-card__type'>{cardPlace.type}</p>
      </div>
    </article>
  );
}
export default PlaceCardItem;


