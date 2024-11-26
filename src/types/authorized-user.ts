type User = {
    'userName': string;
    'avatarUrl': string;
    'isPro': boolean;
  };

type Authorization = {
  'email': string;
  'token': string;
};

type AuthorizedUser = Authorization & User;

export type { AuthorizedUser, User };
