import ProductPageTemplate from "../ProductPageTemplate";
import { getProductById } from "../../../components/products/data";

const product = getProductById("careloop");

const CareloopPage: React.FC = () => {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
};

export default CareloopPage;
