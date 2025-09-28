import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        color: "#000", // 🔹 garante que texto seja sempre preto
      }}
    >
      <h2 style={{ marginBottom: 15, color: "#2c3e50" }}>🛒 Carrinho</h2>
      {cart.length === 0 ? (
        <p style={{ color: "#7f8c8d" }}>Seu carrinho está vazio</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee",
                fontSize: "1rem",
              }}
            >
              {item.name} -{" "}
              <span style={{ fontWeight: "bold", color: "#27ae60" }}>
                R$ {item.price.toFixed(2)}
              </span>
            </div>
          ))}
          <hr style={{ margin: "15px 0" }} />
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
