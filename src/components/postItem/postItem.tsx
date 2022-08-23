import { IPost } from "../../types/post";
import TagList from "../tagList/tagList";
import styles from "./postItem.module.css";

interface IProps {
  item: IPost;
}

const PostItem = ({ item }: IProps) => {
  return (
    <li className={styles.container}>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.body}>{item.body}</p>
      <div className={styles.tagListWrapper}>
        {Array.isArray(item.tags) && <TagList tags={item.tags} />}
      </div>
    </li>
  );
};

export default PostItem;
