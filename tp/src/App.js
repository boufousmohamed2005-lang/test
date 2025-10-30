// src/App.js
import React, { useState, useEffect } from 'react';
import GestionVoituresService from './service/voitureservice';
import ListeVoitures from './component/listvoiture';
import FormulaireVoiture from './component/cartvoiture';
import Statistiques from './component/statistiques';
import './App.css';
function App() {
 const [gestionVoitures] = useState(new GestionVoituresService());
 const [voitures, setVoitures] = useState([]);
 const [voitureEdit, setVoitureEdit] = useState(null);
 const [showForm, setShowForm] = useState(false);
 const [recherche, setRecherche] = useState('');
 // Charger les voitures au démarrage
 useEffect(() => { chargerVoitures();
 }, );
 const chargerVoitures = () => {
 setVoitures(gestionVoitures.getToutesVoitures()); };
 // CRUD Operations
 const ajouterVoiture = (voitureData) => {
 gestionVoitures.ajouterVoiture(voitureData);
 chargerVoitures();
 setShowForm(false);
 };
 const modifierVoiture = (id, donneesModifiees) => {
 gestionVoitures.modifierVoiture(id, donneesModifiees);chargerVoitures();
 setVoitureEdit(null);
 setShowForm(false);
 };
const supprimerVoiture = (id) => {
if (window.confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?'))
{
 gestionVoitures.supprimerVoiture(id);
 chargerVoitures();
 }
 };
const changerStatut = (id, nouveauStatut) => {
 gestionVoitures.changerStatutVoiture(id, nouveauStatut);
 chargerVoitures();
 };
const editerVoiture = (voiture) => {
 setVoitureEdit(voiture);
 setShowForm(true);
 };
const annulerEdition = () => {
 setVoitureEdit(null);
 setShowForm(false);
 };
// Recherche
const voituresFiltrees = recherche ?
gestionVoitures.rechercherVoitures(recherche) : voitures;
return (
 <div className="app">
 <header className="app-header">
 <h1>Garage Agadir</h1>
 <p>Gestion complète de votre parc automobile</p>
 </header>
 <div className="app-container">
 {/* Statistiques */}
 <Statistiques gestionVoitures={gestionVoitures} />
 {/* Barre de recherche */}
 <div className="recherche-container">
 <input type="text" placeholder="Rechercher une voiture (marque,
modèle, couleur)..." value={recherche} className="recherche-input"
 onChange={(e) => setRecherche(e.target.value)}
 />
 </div>{/* Bouton d'ajout */}
 {!showForm && (
 <button className="btn btn-primary btn-ajouter" onClick={() =>
setShowForm(true)}
 > Ajouter une Voiture </button>
 )}
 {/* Formulaire */}
 {showForm && (
 <FormulaireVoiture voiture={voitureEdit} onAjouter={ajouterVoiture}
 onModifier={modifierVoiture} onAnnuler={annulerEdition} />
 )}
 {/* Liste des voitures */}
 <ListeVoitures voitures={voituresFiltrees} onEditer={editerVoiture}
 onSupprimer={supprimerVoiture} onChangerStatut={changerStatut} />
 </div>
 </div>
 );
}
export default App;