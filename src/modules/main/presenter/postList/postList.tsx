import { useRef } from "react";
import PostItem from "../../../../components/postItem/postItem";
import PostLoadingItem from "../../../../components/postItem/postItem.loading";
import { IPostsResponse } from "../../../../types/post";
import styles from "./postList.module.css";

interface IProps {
  isLoading: boolean;
  posts: IPostsResponse;
}

const PostList = ({ isLoading, posts }: IProps) => {
  const loadingDatas = useRef<Array<object>>(new Array(10).fill({})).current;

  return (
    <article>
      <h1>포스트 리스트</h1>
      <ul className={styles.posts}>
        {isLoading
          ? loadingDatas.map((_, idx) => <PostLoadingItem key={idx} />)
          : posts.posts.map((item) => <PostItem key={item.id} item={item} />)}
      </ul>
    </article>
  );
};

export default PostList;
