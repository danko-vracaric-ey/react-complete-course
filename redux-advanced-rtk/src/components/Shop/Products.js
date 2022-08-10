import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    name: "Item1",
    price: 18,
    id: 113434,
    description: "This is a first item!",
  },
  {
    name: "Item2",
    price: 20,
    id: 224342,
    description: "This is a second item!",
  },
  {
    name: "Item3",
    price: 30,
    id: 33434,
    description: "This is a third item!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
