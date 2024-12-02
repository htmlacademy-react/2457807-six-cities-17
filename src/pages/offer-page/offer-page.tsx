
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Rating from '../../components/rating/rating';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import PlaceCardsList from '../../components/places-card-list/places-card-list';
import { PageNames } from '../../constans';
import { fullOffer } from '../../mock/full-offer';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import { offers } from '../../mock/list-offers';

type OfferGoodItemProps = {
  offerGoodItem: string;
}

function OfferGoodItem({offerGoodItem}:OfferGoodItemProps):JSX.Element{
  return (
    <li className="offer__inside-item">
      {offerGoodItem}
    </li>
  );
}

type indexRatingStars = {
  index: number;
}

function FormRatingStars({index}:indexRatingStars):JSX.Element{
  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id= {`${index}-stars`} type="radio"/>
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}


function OfferPage(): JSX.Element{
  return (
    <div className="page">
      <Header pageNames={PageNames.Offer} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {fullOffer.images.map((imageGallery) => <OfferGallery key={crypto.randomUUID()} imageGallery={imageGallery}/>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {fullOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
              Beautiful & luxurious studio at great location
                </h1>
                <BookmarkButton bookmarkClass={PageNames.Offer}/>
              </div>
              <Rating
                ratingClass='offer'
                ratingValue={fullOffer.rating}
              />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {fullOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {fullOffer.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {fullOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{fullOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&#39; inside</h2>
                <ul className="offer__inside-list">
                  {fullOffer.goods.map((offerGood) => <OfferGoodItem key={crypto.randomUUID()} offerGoodItem={offerGood}/>)}
                </ul>
              </div>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={fullOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {fullOffer.host.userName}
                </span>
                <span className="offer__user-status">
                  {fullOffer.host.isPro}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>

            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                    </div>
                    <span className="reviews__user-name">
                        Max
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span ></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                  </div>
                </li>
              </ul>


              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  {Array.from({length:5}).map((_, index) =><FormRatingStars key={crypto.randomUUID()} index = {5 - index}/>)}
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                </div>
              </form>

            </section>


          </div>
          <Map mapClass={PageNames.Offer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardsList offers = {offers} pageNames= {PageNames.Main}/>
            </div>
          </section>
        </div>


      </main>
    </div>
  );
}

export default OfferPage;
