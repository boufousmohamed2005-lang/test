// src/components/FormulaireVoiture.js
import React, { useState, useEffect } from 'react';
// import './FormulaireVoiture.css';
import './formulaire.css'
const FormulaireVoiture = ({ voiture, onAjouter, onModifier, onAnnuler }) => {
 const [formData, setFormData] = useState({
 marque: '',
 modele: '',
 annee: new Date().getFullYear(),
 couleur: '',
 prix: '',
 kilometrage: '',
 carburant: 'Essence',
 statut: 'Disponible' });
const marques = ['Toyota', 'Renault', 'Peugeot', 'Tesla', 'BMW',
'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Citroën'];
const carburants = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
const couleurs = ['Blanc', 'Noir', 'Rouge', 'Bleu', 'Vert', 'Gris',
'Argent', 'Jaune'];
 useEffect(() => {
 if (voiture) {
 setFormData({
 marque: voiture.marque,
 modele: voiture.modele,
 annee: voiture.annee,
 couleur: voiture.couleur,
 prix: voiture.prix,
 kilometrage: voiture.kilometrage,
 carburant: voiture.carburant,
 statut: voiture.statut });
 }
 }, [voiture]);
 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({...prev, [name]: name === 'prix' || name ===
'kilometrage' || name === 'annee' ? Number(value) : value }));
 };
const handleSubmit = (e) => { e.preventDefault();if (voiture) { onModifier(voiture.id, formData);}
else { onAjouter(formData);}
 };
 return (
 <div className="formulaire-voiture">
 <h2>{voiture ? 'Modifier la Voiture' : 'Nouvelle Voiture'}</h2>

 <form onSubmit={handleSubmit}>
 <div className="form-group">
 <label>Marque:</label>
 <select name="marque" value={formData.marque}
 onChange={handleChange} required
 >
 <option value="">Sélectionnez une marque</option>
 {marques.map(marque => (
 <option key={marque} value={marque}>{marque}</option>
 ))}
 </select>
 </div>
 <div className="form-group">
 <label>Modèle:</label>
 <input type="text" name="modele" value={formData.modele}
 onChange={handleChange} placeholder="ex: Corolla,..."
 required />
 </div>
 <div className="form-row">
 <div className="form-group">
 <label>Année:</label>
 <input type="number" name="annee" value={formData.annee}
 onChange={handleChange} min="1990"
 max={new Date().getFullYear()}
required />
 </div>
 <div className="form-group">
 <label>Couleur:</label>
 <select name="couleur value={formData.couleur}
 onChange={handleChange} required"
 >
 <option value="">Sélectionnez une couleur</option>
 {couleurs.map(couleur => (
 <option key={couleur} value={couleur}>{couleur}</option>
 ))}
 </select>
 </div>
 </div>
 <div className="form-row">
 <div className="form-group">
 <label>Prix (DH):</label><input type="number" name="prix" value={formData.prix}
 onChange={handleChange} min="1" placeholder="ex: 925000"
 required />
 </div>
 <div className="form-group">
 <label>Kilométrage:</label>
 <input type="number" name="kilometrage"
 value={formData.kilometrage} onChange={handleChange}
min="0" placeholder="ex: 915000" required />
 </div>
 </div>
 <div className="form-group">
 <label>Type de carburant:</label>
 <select name="carburant" value={formData.carburant}
 onChange={handleChange} required >
 {carburants.map(carburant => (
 <option key={carburant} value={carburant}>{carburant}</option>
 ))}
 </select>
 </div>
 {voiture && (
 <div className="form-group">
 <label>Statut:</label>
 <select name="statut" value={formData.statut}
 onChange={handleChange} >
 <option value="Disponible">Disponible</option>
 <option value="En révision">En révision</option>
 <option value="Vendue">Vendue</option>
 </select>
 </div>
 )}
 <div className="form-actions">
 <button type="submit" className="btn btn-primary">
 {voiture ? 'Modifier' : 'Ajouter'}
 </button>
 <button type="button" className="btn btn-secondary"
 onClick={onAnnuler} > Annuler </button>
 </div>
 </form>
 </div>
 );
};
export default FormulaireVoiture;