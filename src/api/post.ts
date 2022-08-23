import { defaultPostsResponse, IPostsResponse } from "../types/post";

export const apiGetPost = async (): Promise<IPostsResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    return (await response.json()) as IPostsResponse;
  } catch (ex) {
    console.log(ex);
    return defaultPostsResponse;
  }
};
