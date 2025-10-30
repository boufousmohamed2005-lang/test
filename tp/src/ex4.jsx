import React, { useState } from "react";

export default function SortablePaginatedTable() {
  const data = [
    { name: "Alice", date: "2024-10-10" },
    { name: "Bob", date: "2024-07-15" },
    { name: "Charlie", date: "2024-02-01" },
    { name: "David", date: "2024-12-03" },
    { name: "Emma", date: "2024-08-19" },
    { name: "Lucas", date: "2024-01-30" },
    { name: "Mia", date: "2024-09-05" },
    { name: "Noah", date: "2024-03-28" }
  ];

  const [sortField, setSortField] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // TRI avec sort()
  const sortedData = [...data].sort((a, b) =>
    a[sortField] > b[sortField] ? 1 : -1
  );

  // PAGINATION avec slice()
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  function changePage(direction) {
    setCurrentPage(prev =>
      direction === "next"
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ex4</h2>

      <div style={styles.buttons}>
        <button onClick={() => setSortField("name")}>Trier par Nom</button>
        <button onClick={() => setSortField("date")}>Trier par Date</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.pagination}>
        <button onClick={() => changePage("prev")}>◀</button>
        <span>Page {currentPage} / {totalPages}</span>
        <button onClick={() => changePage("next")}>▶</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "16px",
    background: "#f0f0f0",
    borderRadius: "10px"
  },
  title: { textAlign: "center" },
  buttons: {
    display: "flex",
    gap: "10px",
    marginBottom: "12px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff"
  },
  pagination: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between"
  }
};
