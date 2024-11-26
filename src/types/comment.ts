import { User } from './authorized-user';

type Comment = {
    'id': string;
    'date': string;
    'user' : User;
    'comment' : 'string';
    'rating' : number;
  };

export type { Comment };
