import React, { useState } from "react";

const products = [
  { name: "iPhone", tags: ["tech", "apple"] },
  { name: "Galaxy", tags: ["tech", "samsung"] },
  { name: "MacBook", tags: ["apple", "computer"] }
];

function ProductSearch() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.tags.some(tag =>
      tag.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>ex2</h2>

      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      />

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} — <small>{product.tags.join(", ")}</small>
          </li>
        ))}
      </ul>

      {filteredProducts.length === 0 && <p>Aucun produit trouvé 😕</p>}
    </div>
  );
}

export default ProductSearch;
