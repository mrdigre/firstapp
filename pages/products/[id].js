import { useRouter } from "next/router";
import { products } from "./index";
import ProductPage from "../../components/ProductPage";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const productData = products.find((product) => product.id === Number(id));

  return (
    <div>
      {productData ? (
        <ProductPage productData={productData} /> //passing prop
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Post;
