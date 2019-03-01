import { Author } from './author';
import { Comment } from './comment';

export class Post {
    _id?: string;
    title: string;
    image: string;
    content: string;
    date?: Date;
    author: Author;
    comments?: Comment[];
}