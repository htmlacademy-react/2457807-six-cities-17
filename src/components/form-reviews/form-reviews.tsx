import { ChangeEvent} from 'react';
import { useState } from 'react';
import FormRatingStars from '../form-rating-stars/form-rating-stars';
import { CommentLengthLimit } from '../../constants';

type FormDataType = {
  rating: 1 | 2 | 3 | 4 | 5 | null;
  review: string;
}

const initialState: FormDataType = {
  rating: null,
  review: ''
};

function FormReviews():JSX.Element{
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [isButtonSubmitDisabled, setIsButtonSubmetDisabled] = useState(true);
  const handleChangeValueForm =
  ({
    target
  }: | ChangeEvent<HTMLTextAreaElement>
     | ChangeEvent<HTMLInputElement>):void => {
    setFormData((prev) => ({
      ...prev,
      [target.name]:
        target.name === 'review' ? target.value : Number(target.value),
    }));
    if (formData.review.length > CommentLengthLimit.MIN && formData.review.length <= CommentLengthLimit.MAX && formData.rating !== null){
      setIsButtonSubmetDisabled(false);
    }
  };
  const handleSubmitForm = (evt:ChangeEvent<HTMLFormElement>) =>{
    evt.preventDefault();
    setFormData(initialState);
    setIsButtonSubmetDisabled(true);
  };
  return(
    <form
      onSubmit = {handleSubmitForm}
      className="reviews__form form"
      action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({length:5}).map((_, index) =>(
          <FormRatingStars
            key={crypto.randomUUID()}
            index = {5 - index}
            onChange ={handleChangeValueForm}
            rating = {formData.rating}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange = {handleChangeValueForm}
        value = {formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button disabled = {isButtonSubmitDisabled} className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormReviews;
