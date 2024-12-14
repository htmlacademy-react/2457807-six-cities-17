import { starsTitle } from '../../constants';

type IndexRatingStars = {
    index: number;
  }

function FormRatingStars({index}:IndexRatingStars):JSX.Element{
  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id= {`${index}-stars`} type="radio"/>
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={starsTitle[index - 1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
export default FormRatingStars;
