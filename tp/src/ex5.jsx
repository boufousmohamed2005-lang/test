import React from "react";

function ArticlesByCategory() {
  const articles = [
    { title: "React", category: "Tech" },
    { title: "JSX", category: "Tech" },
    { title: "Développement personnel", category: "Lifestyle" }
  ];

  // Regroupement
  const grouped = articles.reduce((acc, article) => {
    if (!acc[article.category]) acc[article.category] = [];
    acc[article.category].push(article.title);
    return acc;
  }, {});

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ex5</h2>
      {Object.entries(grouped).map(([category, titles]) => (
        <div key={category} style={styles.category}>
          <h3 style={styles.categoryTitle}>{category}</h3>
          <ul>
            {titles.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "16px",
    background: "#f4f4f4",
    borderRadius: "8px"
  },
  title: { textAlign: "center", marginBottom: "16px" },
  category: { marginBottom: "12px" },
  categoryTitle: { marginBottom: "6px", color: "#333" }
};

export default ArticlesByCategory;
