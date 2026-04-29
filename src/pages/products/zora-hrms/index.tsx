import ProductPageTemplate from "../ProductPageTemplate";
import { getProductById } from "../../../components/products/data";

const product = getProductById("zora-hrms");

const ZoraHrmsPage: React.FC = () => {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
};

export default ZoraHrmsPage;
