import { CommentType } from '../../types/comment';
import { UserProfileAttributes } from '../../style-options';
import { formatDate } from '../../date';
import Rating from '../rating/rating';
import UserProfile from '../user-profile/user-profile';
import { memo } from 'react';


type ReviewsItemProps = {
    comment: CommentType;
  }

const ReviewsItem = memo(({comment}:ReviewsItemProps):JSX.Element =>(
  <li className="reviews__item">
    <UserProfile userDate={comment.user} userProfileStyle={UserProfileAttributes.reviews}/>
    <div className="reviews__info">
      <Rating
        ratingClass={'reviews'}
        ratingValue={comment.rating}
      />
      <p className="reviews__text">
        {comment.comment}
      </p>
      <time className="reviews__time" dateTime={comment.date}>{formatDate(new Date(comment.date))}</time>
    </div>
  </li>
));

ReviewsItem.displayName = 'ReviewsItem';

export default ReviewsItem;
