import fullOfferComments from '../../mock/full-offer-comments';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList():JSX.Element{
  const fullSortComments = [...fullOfferComments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())];
  return(
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{fullOfferComments.length}</span></h2>
      <ul className="reviews__list">
        {fullSortComments.slice(0,10).map((fullOfferComment) => <ReviewsItem key = {fullOfferComment.id} comment = {fullOfferComment}/>)}
      </ul>
    </>
  );
}

export default ReviewsList;
