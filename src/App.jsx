import { useState } from "react";
import "./App.css";
import Listgroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CallApi from "./components/CallApi";

function App() {
  const [count, setCount] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div>
      <h1
        onClick={() => setCount(count + 1)}
        className="text-5xl font-bold text-red-800"
      >
        TAILWIND CHECK {count}
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <Listgroup />

        {/* Button to toggle alert */}
        <Button onClick={() => setShowProduct(true)}>
          {showProduct ? "Close Product" : "Show Product"}
          
        </Button>

        {/* Conditionally render Alert */}
        {showProduct && <CallApi onClose={() => setShowProduct(false)} />}
      </div>
      {/* <CallApi/> */}
    </div>
  );
}

export default App;
