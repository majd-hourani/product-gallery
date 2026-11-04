# Product Gallery

A simple React product gallery that displays a responsive grid of product cards (image, name, price and description). Built with React and Vite.

![Product Gallery screenshot](./image.png)

## Features

- Reusable `Product` component driven by props
- Responsive CSS grid layout that adapts to any screen size
- Card hover effect with smooth transitions
- Clean, lightweight styling with plain CSS

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
git clone https://github.com/majd-hourani/product-gallery.git
cd product-gallery
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run build`   | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint on the project    |

## Project Structure

```
product-gallery/
├── image.png            # Screenshot used in this README
├── src/
│   ├── images/          # Product images
│   ├── App.jsx          # Main component, renders the product list
│   ├── Product.jsx      # Reusable product card component
│   ├── index.css        # Global and component styles
│   └── main.jsx         # App entry point
└── package.json
```

## Customizing Products

Products are defined in `src/App.jsx`. To add one, drop an image into `src/images/`, import it, and add another `Product`:

```jsx
<Product
  image={MyImage}
  name="Product Name"
  price={49.99}
  description="A short description of the product."
/>
```

## Author

[Majd Hourani](https://github.com/majd-hourani)
