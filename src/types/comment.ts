import { UserType } from './authorized-user';

type CommentType = {
    'id': string;
    'date': string;
    'user' : UserType;
    'comment' : 'string';
    'rating' : number;
  };

export type { CommentType };
