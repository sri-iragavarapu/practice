import { useParams } from "react-router-dom";

function Product() {

  const { id } = useParams();

  return (
    <div className="page">
      <h1>Product Page</h1>
      <h2>Product ID: {id}</h2>
    </div>
  );
}

export default Product;