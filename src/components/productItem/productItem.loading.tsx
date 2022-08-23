import styles from "./productItem.module.css";

const ProductLoadingItem = () => {
  return (
    <li className={styles.container}>
      <div className={styles.thumbnailWrapper} />
      <div className={styles.titleLoading} />
      <div className={styles.descriptionLoading} />
      <div className={styles.brandLoading} />
    </li>
  );
};

export default ProductLoadingItem;
