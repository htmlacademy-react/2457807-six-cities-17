import dayjs from 'dayjs';
import { DATE_FORMATE } from './constants';

const formatDate = (dueDate:Date) => dayjs(dueDate).format(DATE_FORMATE);

export {formatDate};
