import styles from "./postItem.module.css";

const PostLoadingItem = () => {
  return (
    <li className={styles.container}>
      <div className={styles.titleLoading} />
      <div className={styles.bodyLoading} />
    </li>
  );
};

export default PostLoadingItem;
