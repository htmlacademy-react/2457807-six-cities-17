
import { AuthorizationStatusType, AuthorizedUserType } from '../../types/authorized-user';
import { State } from '../../types/state';
import { NameSpace } from '../../constants';

export const selectAuthorizationStatus = (state:State):AuthorizationStatusType => state[NameSpace.User].authorizationStatus;

export const selectUser = (state: State): AuthorizedUserType | null => state[NameSpace.User].user;
export const selectIsSubmitUserAuth = (state: State): boolean => state[NameSpace.User].isSubmitUserAuth;
