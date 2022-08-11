import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <h1>{params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
