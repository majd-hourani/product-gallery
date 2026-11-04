function Product(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Our Products</h1>

      <Product
        image="https://placehold.co/300x200"
        name="Wireless Headphones"
        price={59.99}
        description="High-quality wireless headphones with clear sound."
      />

      <Product
        image="https://placehold.co/300x200"
        name="Smart Watch"
        price={89.99}
        description="A stylish smartwatch to track your daily activities."
      />

      <Product
        image="https://placehold.co/300x200"
        name="Bluetooth Speaker"
        price={39.99}
        description="Portable speaker with powerful sound and deep bass."
      />
    </div>
  );
}

export default App;
