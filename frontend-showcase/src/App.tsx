import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import axios from "axios";
import Cube from "./components/Cube";
import "./App.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

function App() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [productPrice, setProductPrice] = useState<number>(0);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  };

  const addProduct = () => {
    axios
      .post("http://localhost:8000/api/products/", {
        name: productName,
        description: productDescription,
        price: productPrice,
      })
      .then((response) => {
        console.log("Product added successfully:", response.data);
        fetchProducts(); // Refresh the product list
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  };

  return (
    <div className="App">
      <div className="split-container">
        <div className="api-section">
          <h1>Product Management</h1>
          <div className="controls">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Product Description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(Number(e.target.value))}
            />
            <button onClick={addProduct}>Add Product</button>
            <button onClick={fetchProducts}>Fetch Products</button>
          </div>
          <div className="product-list">
            <h2>Product List</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <div>
                    {product.name} - {product.description}
                    <br/>
                    Cost: {product.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="canvas-section">
          <h1>3D Object</h1>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
