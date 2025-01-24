import { memo } from 'react';
import { PERCENTAGE_FILLING_ONE_STAR } from '../../constants';
import { RatingAttributes } from '../../style-options';

type RatingProps = {
    ratingClass: string;
    ratingValue: number | null;
  }

const Rating = memo(({ratingClass, ratingValue}: RatingProps):JSX.Element =>(
  <div className={`${ratingClass}__rating rating`}>
    <div className={`${ratingClass}__stars rating__stars`}>
      <span style={{width: `${Math.round(ratingValue === null ? 0 : ratingValue) * PERCENTAGE_FILLING_ONE_STAR}%` }} />
      <span className="visually-hidden">Rating</span>
    </div>
    {RatingAttributes[ratingClass].ratingVisibility &&
        <span className="offer__rating-value rating__value">{ratingValue}</span>}
  </div>
));

Rating.displayName = 'Rating';
export default Rating;

