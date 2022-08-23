import { useEffect, useState } from "react";
import { apiGetPost } from "../../../api/post";
import { apiGetProducts } from "../../../api/product";
import { defaultPostsResponse, IPostsResponse } from "../../../types/post";
import { defaultProductsResponse, IProductsResponse } from "../../../types/product";

const useMainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProductsResponse>(defaultProductsResponse);
  const [posts, setPosts] = useState<IPostsResponse>(defaultPostsResponse);

  useEffect(() => {
    const initialize = async () => {
      const [products, posts] = await Promise.all([apiGetProducts(), apiGetPost()]);
      setProducts(products);
      setPosts(posts);
      setIsLoading(false);
    };

    initialize();
  }, []);

  return {
    isLoading,
    products,
    posts,
  };
};

export default useMainContainer;
