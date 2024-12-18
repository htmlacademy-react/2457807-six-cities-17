import { ChangeEvent } from 'react';
import { starsTitle } from '../../constants';

type IndexRatingStars = {
    index: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    rating: 1 | 2 | 3 | 4 | 5 | null;
  }

function FormRatingStars({index, onChange, rating}:IndexRatingStars):JSX.Element{
  return(
    <>
      <input
        onChange = {onChange}
        className="form__rating-input visually-hidden"
        name="rating" value={String(rating)} id= {`${index}-stars`} type="radio"
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={starsTitle[index - 1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
export default FormRatingStars;
