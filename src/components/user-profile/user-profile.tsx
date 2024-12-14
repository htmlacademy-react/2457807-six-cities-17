import { UserType } from '../../types/authorized-user';
import { UserProfileAttributes } from '../../style-options';


type UserProfileProps = {
    userDate: UserType;
    userProfileStyle: typeof UserProfileAttributes[keyof typeof UserProfileAttributes];
  }

function UserProfile({userDate, userProfileStyle}:UserProfileProps):JSX.Element{
  const {userName, avatarUrl, isPro} = userDate;
  const {className, width, height} = userProfileStyle;
  const classNameType = className === 'reviews' ? 'reviews' : 'offer';
  return(
    <div className={`${className === 'reviews' ? 'reviews__' : 'offer__host-'}user user`}>
      <div className={`${classNameType}__avatar-wrapper ${classNameType}__avatar-wrapper${isPro ? '--pro' : ''} user__avatar-wrapper`}>
        <img className={`${classNameType}__avatar user__avatar`} src={avatarUrl} width={width} height={height} alt={`${className.charAt(0).toUpperCase() + className.charAt(0)} avatar`}/>
      </div>
      <span className={`${classNameType}__user-name`}>
        {userName}
      </span>
      <span className={`${classNameType}__user-status`}>
        {isPro && 'Pro'}
      </span>
    </div>
  );
}

export default UserProfile;
