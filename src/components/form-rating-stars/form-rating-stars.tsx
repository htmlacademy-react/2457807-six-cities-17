import { ChangeEvent, memo } from 'react';
import { starsTitle } from '../../constants';

type IndexRatingStars = {
    index: number;
    rating: 1 | 2 | 3 | 4 | 5 | 0;
    onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  }

const FormRatingStars = memo(({index, onRatingChange, rating}:IndexRatingStars):JSX.Element =>(
  <>
    <input
      onChange = {onRatingChange}
      className="form__rating-input visually-hidden"
      name="rating"
      value={index}
      id= {`${index}-stars`}
      type="radio"
      checked = {index === rating}
    />
    <label
      htmlFor={`${index}-stars`}
      className="reviews__rating-label form__rating-label"
      title={starsTitle[index - 1]}
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
));

FormRatingStars.displayName = 'FormRatingStars';

export default FormRatingStars;
