import { UserProfileAttributes } from '../../style-options';
import { CommentType } from '../../types/comment';
import Rating from '../rating/rating';
import UserProfile from '../user-profile/user-profile';

type ReviewsItemProps = {
    comment: CommentType;
  }

function ReviewsItem({comment}:ReviewsItemProps):JSX.Element{

  return(
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
        <time className="reviews__time" dateTime={comment.date}>{comment.date}</time>
      </div>
    </li>

  );
}

export default ReviewsItem;
