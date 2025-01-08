import { ChangeEvent, MutableRefObject } from 'react';

type AuthorizationFormProps = {
  loginRef: MutableRefObject<HTMLInputElement | null>;
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  onLogInSubmit: (evt: ChangeEvent<HTMLFormElement>) => void;
}

function AuthorizationForm({loginRef, passwordRef, onLogInSubmit}:AuthorizationFormProps) {
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
        <label className="visually-hidden">Password</label>
        <input
          ref = {passwordRef}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password > 5 символов и цифры"
          required
          pattern=".{5,}"
          title="5 символов минимум и обязательны цифры"
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
          Sign in
      </button>
    </form>
  );
}

export default AuthorizationForm;
