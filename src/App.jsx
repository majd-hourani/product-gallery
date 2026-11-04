function Prodcut() {
  return (
    <div>
      <img src="https://placehold.co/300x200" alt="Wireless Headphones" />
      <h2>Wireless Headphones</h2>
      <p>$59.99</p>
      <p>High-quality wireless headphones with clear sound.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Our Products</h1>

      <Prodcut />
      <Prodcut />
      <Prodcut />
    </div>
  );
}

export default App;
