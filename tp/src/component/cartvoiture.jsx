// src/components/CarteVoiture.js
import React from 'react';
// import './CarteVoiture.css'
import './cartevoiture.css'
const CarteVoiture = ({ voiture, onEditer, onSupprimer, onChangerStatut }) => {
 const getIconeCarburant = (carburant) => {
 const icons = {
 'Essence': 'ES',
 'Diesel': 'D',
 'Électrique': 'E+',
 'Hybride': 'HY'
 };
 return icons[carburant] || 'V';
 };
 const getCouleurStatut = (statut) => {
 const couleurs = {
 'Disponible': 'statut-disponible',
 'Vendue': 'statut-vendue',
 'En révision': 'statut-revision'
 };
 return couleurs[statut] || 'statut-default';
 };
 const age = new Date().getFullYear() - voiture.annee;
return (
 <div className="carte-voiture">
 <div className="carte-header">
 <span className="icone-carburant">
 {getIconeCarburant(voiture.carburant)}
 </span>
 <h3>{voiture.marque} {voiture.modele}</h3>
 <span className={`badge-statut ${getCouleurStatut(voiture.statut)}`}>
 {voiture.statut}</span>
 </div>
 <div className="carte-details">
 <div className="detail">
 <span className="label">Année:</span>
 <span className="valeur">{voiture.annee} ({age} an{age > 1 ? 's'
: ''})</span>
 </div>
 <div className="detail">
 <span className="label">Couleur:</span>
 <span className="valeur">{voiture.couleur}</span>
 </div>
<div className="detail">
 <span className="label">Kilométrage:</span>
 <span className="valeur">{voiture.kilometrage.toLocaleString()} km</span>
 </div>
<div className="detail">
 <span className="label">Prix:</span>
 <span className="valeur prix">{voiture.prix.toLocaleString()} DH</span>
 </div>
 <div className="detail">
 <span className="label">Carburant:</span>
 <span className="valeur">{voiture.carburant}</span>
 </div>
</div>
<div className="carte-actions">
 <button className="btn btn-secondary" onClick={() => onEditer(voiture)}
 disabled={voiture.statut === 'Vendue'}
 > Modifier</button>
 {voiture.statut === 'Disponible' && (
 <button className="btn btn-warning"
 onClick={() => onChangerStatut(voiture.id, 'En révision')}
 > Révision </button>
 )}
 {voiture.statut === 'En révision' && (
 <button className="btn btn-success"
 onClick={() => onChangerStatut(voiture.id, 'Disponible')}
 > Disponible </button>
 )}

 {voiture.statut === 'Disponible' && (
 <button className="btn btn-vendue"
 onClick={() => onChangerStatut(voiture.id, 'Vendue')}
 > Vendre </button>
 )}

 <button className="btn btn-danger" onClick={() =>
onSupprimer(voiture.id)}
 > Supprimer </button>
 </div> </div>
 );
};
export default CarteVoiture;