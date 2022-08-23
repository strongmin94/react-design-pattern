import { IProduct } from "../../types/product";
import styles from "./productItem.module.css";

interface IProps {
  item: IProduct;
}

const ProductItem = ({ item }: IProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.thumbnailWrapper}>
        <img className={styles.thumbnail} src={item.thumbnail} width="100%" height={"100%"} />
      </div>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.brand}>{item.brand}</p>
    </li>
  );
};

export default ProductItem;
