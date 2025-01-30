import { ChangeEvent, memo, useCallback} from 'react';
import { useState } from 'react';
import FormRatingStars from '../form-rating-stars/form-rating-stars';
import { CommentLengthLimit } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { submitToOfferReviewAction } from '../../store/api-actions';
import { selectIsSubmitReviewLoading } from '../../store/offers/offers-selectors';
import { processErrorHandle } from '../../services/process-error-handle';


const RATING_VALUES = ['one', 'two', 'three', 'four', 'five'] as const;

type FormDataType = {
  rating: 0 | 1 | 2 | 3 | 4 | 5 ;
  review: string;
}

const initialState: FormDataType = {
  rating: 0,
  review: ''
};
type FormReviewsProps = {
  offerId: string | null;
}

const FormReviews = memo(({offerId}:FormReviewsProps):JSX.Element =>{
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const isSubmitReviewLoading = useAppSelector(selectIsSubmitReviewLoading);
  const dispatch = useAppDispatch();
  const isButtonSubmitDisabled = formData.rating === 0 || formData.rating === null || formData.review.length < CommentLengthLimit.Min || formData.review.length > CommentLengthLimit.Max;
  const handleValueFormChange = useCallback(
    ({
      target
    }: | ChangeEvent<HTMLTextAreaElement>
     | ChangeEvent<HTMLInputElement>):void => {
      setFormData((prev) => ({
        ...prev,
        [target.name]:
        target.name === 'review' ? target.value : Number(target.value),
      }));
    }, []);
  const handleFormSubmit = useCallback((evt:ChangeEvent<HTMLFormElement>) =>{
    evt.preventDefault();

    dispatch(
      submitToOfferReviewAction({
        offerId,
        comment: formData.review,
        rating: formData.rating,
      })
    ).unwrap()
      .then(() => {
        setFormData(initialState);
      })
      .catch(
        ({message}) => processErrorHandle(String(message)));
  }, [dispatch, offerId, formData]);
  return(
    <form
      onSubmit = {handleFormSubmit}
      className="reviews__form form"
      action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value, index) =>(
          <FormRatingStars
            key={value}
            rating = {formData.rating}
            index = {5 - index}
            onRatingChange ={handleValueFormChange}
            isSubmitReviewLoading = {isSubmitReviewLoading}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange = {handleValueFormChange}
        value = {formData.review}
        disabled = {isSubmitReviewLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          disabled = {isButtonSubmitDisabled || isSubmitReviewLoading}
          className="reviews__submit form__submit button" type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
);

FormReviews.displayName = 'FormReviews';

export default FormReviews;
