type UserType = {
    'userName': string;
    'avatarUrl': string;
    'isPro': boolean;
  };

type AuthorizationType = {
  'email': string;
  'token': string;
};

type AuthorizedUserType = AuthorizationType & UserType;

export type { AuthorizedUserType, UserType, AuthorizationType };
