// src/components/Statistiques.js
import React from 'react';
// import './Statistiques.css';
import './statistiques.css'
const Statistiques = ({ gestionVoitures }) => {
 const stats = gestionVoitures.getStatistiques();
return (
<div className="statistiques">
 <h2>Tableau de Bord</h2>
 <div className="stats-grid">
 <div className="stat-item total">
 <div className="stat-icon">V</div>
 <div className="stat-valeur">{stats.total}</div>
 <div className="stat-label">Total Voitures</div>
 </div>
 <div className="stat-item disponibles">
 <div className="stat-icon">OK</div>
 <div className="stat-valeur">{stats.disponibles}</div>
 <div className="stat-label">Disponibles</div>
 </div>
 <div className="stat-item vendues">
 <div className="stat-icon">X</div>
 <div className="stat-valeur">{stats.vendues}</div>
 <div className="stat-label">Vendues</div>
 </div>
 <div className="stat-item revision">
 <div className="stat-icon">M</div>
 <div className="stat-valeur">{stats.enRevision}</div>
 <div className="stat-label">En révision</div>
 </div>
 <div className="stat-item prix">
 <div className="stat-icon">Px</div>
 <div className="stat-valeur">{stats.moyennePrix}DH</div>
 <div className="stat-label">Prix moyen</div>
 </div>
 <div className="stat-item stock">
 <div className="stat-icon">VS</div>
 <div className="stat-valeur">{Math.round(stats.totalValeurStock /
1000)}KDH</div>
 <div className="stat-label">Valeur stock</div>
 </div>
 </div>

 {stats.marquePlusRepresentee && (
 <div className="marque-dominante">
 <span>Marque la plus représentée :
 <strong>{stats.marquePlusRepresentee}</strong>
 </span> </div>
 )}
 </div>
 );
};
export default Statistiques;