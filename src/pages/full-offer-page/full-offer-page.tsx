import { Helmet } from 'react-helmet-async';
import { UserProfileAttributes } from '../../style-options';
import { AuthorizationStatus, NEAR_BY_OFFERS_LIMITED, PageNames } from '../../constants';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Rating from '../../components/rating/rating';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import PlaceCardsList from '../../components/place-card-list/place-card-list';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import FormReviews from '../../components/form-reviews/form-reviews';
import UserProfile from '../../components/user-profile/user-profile';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { selectFullOffer, selectIsFullOfferLoading, selectIsNearByOffersLoading, selectIsReviewsListLoading, selectNearByOffers, selectReviewList } from '../../store/offers/offers-selectors';
import { selectAuthorizationStatus} from '../../store/user/user-selector';
import {fetchOfferInfoByIDAction, fetchOfferReviewListAction, fetchOffesNearAction } from '../../store/api-actions';
import { memo, useEffect } from 'react';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../page-loading/page-loading';
import { adaptFullOfferToOfferList } from '../../utils';

type OfferGoodItemProps = {
  offerGoodItem: string;
}

const OfferGoodItem = memo(({offerGoodItem}:OfferGoodItemProps):JSX.Element =>(
  <li className="offer__inside-item">
    {offerGoodItem}
  </li>
));

function FullOfferPage(): JSX.Element{
  const {offerId} = useParams() || null;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!offerId) {
      return;
    }
    dispatch(fetchOfferInfoByIDAction(offerId))
      .unwrap()
      .then(() => {
        dispatch(fetchOfferReviewListAction(offerId));
        dispatch(fetchOffesNearAction(offerId));
      });
  },[offerId, dispatch]);
  const fullOffer = useAppSelector(selectFullOffer);
  const isFullOfferLoading = useAppSelector(selectIsFullOfferLoading);
  const nearByOffers = useAppSelector(selectNearByOffers).slice(
    0,
    NEAR_BY_OFFERS_LIMITED
  );
  const isNearByOffersLoading = useAppSelector(selectIsNearByOffersLoading);
  const mapMarkOffersNearBy = [...nearByOffers, ...adaptFullOfferToOfferList(fullOffer)];
  const reviewList = useAppSelector(selectReviewList);
  const isReviewsListLoading = useAppSelector(selectIsReviewsListLoading);

  if(isFullOfferLoading || isNearByOffersLoading || isReviewsListLoading){
    return <LoadingScreen/>;
  }
  if(fullOffer === null){
    return <NotFoundPage/>;
  }
  const {
    images, isPremium, rating, type, bedrooms,
    maxAdults, price, goods, description, host, id
  } = fullOffer;
  const fullOfferImagesSlice = images.slice(0,6).map((imageGallery) => <OfferGallery key={imageGallery} imageGallery={imageGallery}/>);
  return (
    <div className="page">
      <Helmet>
        <title>Страница предложения</title>
      </Helmet>
      <Header pageNames={PageNames.Offer} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {fullOfferImagesSlice}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
              Beautiful & luxurious studio at great location
                </h1>
                <BookmarkButton offerId = {id} bookmarkClass={PageNames.Offer}/>
              </div>
              <Rating
                ratingClass={'offer'}
                ratingValue={rating}
              />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&#39; inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((offerGood) => <OfferGoodItem key={offerGood} offerGoodItem={offerGood}/>)}
                </ul>
              </div>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <UserProfile userDate={host} userProfileStyle={UserProfileAttributes.host}/>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              {reviewList.length === 0 ? '' : <ReviewsList fullOfferComments = {reviewList}/>}
              {authorizationStatus === AuthorizationStatus.Auth ? <FormReviews offerId = {offerId === undefined ? null : offerId}/> : ''}
            </section>
          </div>
          <Map mapClass={PageNames.Offer} city = {fullOffer.city.name} selectedPointId = {fullOffer.id} offers = {mapMarkOffersNearBy}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearByOffers.length && <PlaceCardsList offers = {nearByOffers} pageNames= {PageNames.NearPlaces}/>}
            </div>
          </section>
        </div>


      </main>
    </div>
  );
}

OfferGoodItem.displayName = 'OfferGoodItem';

export default FullOfferPage;
