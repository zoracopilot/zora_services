import ProductPageTemplate from "../ProductPageTemplate";
import { getProductById } from "../../../components/products/data";

const product = getProductById("groomvy");

const GroomvyPage: React.FC = () => {
  if (!product) {
    return null;
  }

  return <ProductPageTemplate product={product} />;
};

export default GroomvyPage;
