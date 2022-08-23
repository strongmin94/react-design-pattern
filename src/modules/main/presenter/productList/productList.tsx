import { useRef } from "react";
import ProductItem from "../../../../components/productItem/productItem";
import ProductLoadingItem from "../../../../components/productItem/productItem.loading";
import { IProductsResponse } from "../../../../types/product";
import styles from "./productList.module.css";

interface IProps {
  isLoading: boolean;
  products: IProductsResponse;
}

const ProductList = ({ isLoading, products }: IProps) => {
  const loadingDatas = useRef<Array<object>>(new Array(10).fill({})).current;

  return (
    <article>
      <h1>상품 리스트</h1>
      <ul className={styles.products}>
        {isLoading
          ? loadingDatas.map((_, idx) => <ProductLoadingItem key={idx} />)
          : products.products.map((item) => <ProductItem key={item.id} item={item} />)}
      </ul>
    </article>
  );
};

export default ProductList;
