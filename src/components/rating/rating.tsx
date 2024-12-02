import { RatingAttributes } from '../../constans';
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
export default Rating;
