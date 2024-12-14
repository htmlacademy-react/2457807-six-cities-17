import { UserType } from './authorized-user';

type CommentType = {
    'id': string;
    'comment' : string;
    'date': string;
    'rating' : number;
    'user' : UserType;
  };

export type { CommentType };


