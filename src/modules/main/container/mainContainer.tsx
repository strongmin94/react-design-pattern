import useMainContainer from "../hooks/useMainContainer";
import PostList from "../presenter/postList/postList";
import ProductList from "../presenter/productList/productList";
import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const { isLoading, products, posts } = useMainContainer();

  return (
    <section className={styles.container}>
      <ProductList isLoading={isLoading} products={products} />
      <PostList isLoading={isLoading} posts={posts} />
    </section>
  );
};

export default MainContainer;
