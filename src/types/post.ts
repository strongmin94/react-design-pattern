import { IPagination } from "./common";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: Array<string>;
  reactions: number;
}

export interface IPostsResponse extends IPagination {
  posts: Array<IPost>;
}

export const defaultPostsResponse: IPostsResponse = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 0,
};
