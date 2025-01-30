import { memo } from 'react';
import { CommentType } from '../../types/comment';
import ReviewsItem from '../reviews-item/reviews-item';
import { NUMBER_OF_VISIBLE_COMMENTS } from '../../constants';

type CommentListProps = {
  fullOfferComments: CommentType[];
}

const ReviewsList = memo(({fullOfferComments}:CommentListProps):JSX.Element =>{

  const fullSortComments = fullOfferComments.toSorted((firstComment, secondComment) => new Date(secondComment.date).getTime() - new Date(firstComment.date).getTime())
    .slice(0, NUMBER_OF_VISIBLE_COMMENTS);

  return(
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{fullOfferComments.length}</span></h2>
      <ul className="reviews__list">
        {fullSortComments.map((fullOfferComment) => <ReviewsItem key = {fullOfferComment.id} comment = {fullOfferComment}/>)}
      </ul>
    </>
  );
});

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;
