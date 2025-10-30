// src/components/ListeVoitures.js
import React from 'react';
import CarteVoiture from './cartvoiture';
import "./listvoiture.css"
const ListeVoitures = ({voitures, onEditer, onSupprimer, onChangerStatut}) => {
 if (voitures.length === 0) {
 return (
 <div className="aucune-voiture">
 <p>Aucune voiture trouvée</p>
 <p className="sous-titre">Ajoutez la première voiture</p>
 </div>
 );
 }
 return (
 <div className="liste-voitures">
 <h2>Parc Automobile ({voitures.length} voitures)</h2>
 <div className="grille-voitures">
 {voitures.map(voiture => (
 <CarteVoiture
 key={voiture.id}
voiture={voiture}onEditer={onEditer}
onSupprimer={onSupprimer}
 onChangerStatut={onChangerStatut}
 />
 ))}
 </div>
 </div>
 );
};
export default ListeVoitures;
