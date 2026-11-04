import HeadphoneImage from "./images/headphone.png";
import SpeakerImage from "./images/speaker.png";
import WatchImage from "./images/watch.png";

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

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Our Products</h1>

      <div className="product-list">
        <Product
          image={HeadphoneImage}
          name="Wireless Headphones"
          price={59.99}
          description="High-quality wireless headphones with clear sound."
        />

        <Product
          image={WatchImage}
          name="Smart Watch"
          price={89.99}
          description="A stylish smartwatch to track your daily activities."
        />

        <Product
          image={SpeakerImage}
          name="Bluetooth Speaker"
          price={39.99}
          description="Portable speaker with powerful sound and deep bass."
        />
      </div>
    </div>
  );
}

export default App;
