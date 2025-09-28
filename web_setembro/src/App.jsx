import React, { useEffect, useState } from "react";
import { getProducts, addToCart } from "./api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setMessage("Erro: formato de dados inesperado");
          setProducts([]);
        }
      })
      .catch((err) => {
        setMessage("Erro ao carregar produtos: " + err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product)
      .then(() => {
        setCart((prev) => [...prev, product]);
        setMessage(`✅ Produto "${product.name}" adicionado ao carrinho!`);
      })
      .catch((err) => {
        setMessage("Erro ao adicionar ao carrinho: " + err.message);
      });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        width: "100vw", // 🔹 largura total da tela
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          backgroundColor: "#3498db",
          padding: "15px 30px",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        🛍️ Mini Loja Online
      </header>

      <main style={{ padding: "20px 40px" }}>
        {message && (
          <p
            style={{
              color: message.startsWith("✅") ? "#27ae60" : "red",
              textAlign: "center",
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        {loading ? (
          <p style={{ textAlign: "center" }}>Carregando produtos...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr", // mais espaço para produtos
              gap: 30,
              width: "100%",
            }}
          >
            <ProductList products={products} onAdd={handleAddToCart} />
            <Cart cart={cart} />
          </div>
        )}
      </main>

      <footer
        style={{
          marginTop: 40,
          backgroundColor: "#2c3e50",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
        }}
      >
        © {new Date().getFullYear()} Mini Loja Online
      </footer>
    </div>
  );
}

export default App;
