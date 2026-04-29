import ProductPageTemplate from "../ProductPageTemplate";
import { getProductById } from "../../../components/products/data";

const product = getProductById("erp");

const ErpPage: React.FC = () => {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
};

export default ErpPage;
