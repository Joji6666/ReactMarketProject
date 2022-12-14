function Products(props) {
  return (
    <div>
      <div className="products">
        <div className="product-box">
          <img src={props.product.img} width="250px" height="250px" />
          <h4>{props.product.title}</h4>
          <div>{props.product.price}</div>
          <div>{props.product.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
