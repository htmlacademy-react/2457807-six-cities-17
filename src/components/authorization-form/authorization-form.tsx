import { ChangeEvent, MutableRefObject } from 'react';
import { useAppSelector } from '../../hooks';
import { selectIsSubmitUserAuth } from '../../store/user/user-selector';
import './authorization-form.css';

type AuthorizationFormProps = {
  loginRef: MutableRefObject<HTMLInputElement | null>;
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  onLogInSubmit: (evt: ChangeEvent<HTMLFormElement>) => void;
}

function AuthorizationForm({loginRef, passwordRef, onLogInSubmit}:AuthorizationFormProps) {
  const isSubmitUserAuth = useAppSelector(selectIsSubmitUserAuth);
  return (
    <form
      onSubmit={onLogInSubmit}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          ref = {loginRef}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="authorization-form">Минимум 1 буква латиницей и 1 цифра</label>
        <input
          ref = {passwordRef}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
          title="2 символa минимум: в том числе 1 буква латиницей  и 1 цифра"
        />
      </div>
      <button className="login__submit form__submit button" type="submit"
        disabled = {!isSubmitUserAuth}
      >
          Sign in
      </button>
    </form>
  );
}

export default AuthorizationForm;
