import ProductPageTemplate from "../ProductPageTemplate";
import { getProductById } from "../../../components/products/data";

const product = getProductById("zora-crm");

const ZoraCrmPage: React.FC = () => {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
};

export default ZoraCrmPage;
