type UserType = {
    'userName': string;
    'avatarUrl': string;
    'isPro': boolean;
  };

type AuthorizationType = {
  id: number;
  'email': string;
  'token': string;
};

type AuthorizedUserType = AuthorizationType & UserType;

 type AuthData = {
  login: string;
  password: string;
};

export type { AuthorizedUserType, UserType, AuthorizationType, AuthData };
