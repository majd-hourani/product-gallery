function Product({ image, name, price, description }) {
  return (
    <div className="product">
      <img className="product-image" src={image} alt={name} />
      <div className="product-body">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

export default Product;
