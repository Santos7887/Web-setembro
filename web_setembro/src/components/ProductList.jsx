import React from "react";

const ProductList = ({ products, onAdd }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "#2c3e50", marginBottom: 20 }}>🛍️ Produtos</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          width: "100%",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              color: "#000", // 🔹 garante que o texto será preto
            }}
          >
            <h3 style={{ marginBottom: 10, fontSize: "1.1rem" }}>
              {product.name}
            </h3>
            <p style={{ fontWeight: "bold", color: "#27ae60" }}>
              R$ {product.price.toFixed(2)}
            </p>
            <button
              onClick={() => onAdd(product)}
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginTop: 10,
              }}
            >
              ➕ Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
