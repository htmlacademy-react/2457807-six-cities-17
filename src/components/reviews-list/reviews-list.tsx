import { CommentType } from '../../types/comment';
import ReviewsItem from '../reviews-item/reviews-item';

type commentListProps = {
  fullOfferComments: CommentType[];
}

function ReviewsList({fullOfferComments}:commentListProps):JSX.Element{

  const fullSortComments = fullOfferComments.slice()
    .sort((firstComment, secondComment) => new Date(secondComment.date).getTime() - new Date(firstComment.date).getTime())
    .slice(0, 10);

  return(
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{fullOfferComments.length}</span></h2>
      <ul className="reviews__list">
        {fullSortComments.map((fullOfferComment) => <ReviewsItem key = {crypto.randomUUID()} comment = {fullOfferComment}/>)}
      </ul>
    </>
  );
}

export default ReviewsList;
