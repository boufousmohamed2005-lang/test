import React  from "react";


const orders = [
  { id: 1, amount: 120, status: "completed" },
  { id: 2, amount: 80, status: "pending" },
  { id: 3, amount: 160, status: "completed" },
  { id: 4, amount: 30, status: "cancelled" }
];

function OrderStats() {
  // Total des ventes (completed)
  const totalSales = orders
    .filter(order => order.status === "completed")
   .reduce((sum, order) => sum + order.amount, 0);

  // Nombre commandes annulées
  const cancelledCount = orders.filter(order => order.status === "cancelled").length;

  // Montant moyen sur toutes les commandes
  const averageAmount = orders.reduce((sum, order) => sum + order.amount, 0) / orders.length;

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", width: "300px", borderRadius: "8px" }}>
      <h2>ex1</h2>
      <p>Total des ventes: <strong>{totalSales} €</strong></p>
      <p>Commandes annulées: <strong>{cancelledCount}</strong></p>
      <p>Montant moyen: <strong>{averageAmount} €</strong></p>
    </div>
  );
}

export default OrderStats;
