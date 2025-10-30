// src/models/Voiture.js
class Voiture {
 constructor(id, marque, modele, annee, couleur, prix, kilometrage,
carburant = 'Essence', statut = 'Disponible') {
 this.id = id;
 this.marque = marque;
 this.modele = modele;
 this.annee = annee;
 this.couleur = couleur;
 this.prix = prix;
 this.kilometrage = kilometrage;
 this.carburant = carburant;
 this.statut = statut;}
 getAge() { return new Date().getFullYear() - this.annee; }
 mettreEnRevision() { this.statut = 'En révision'; }
 rendreDisponible() { this.statut = 'Disponible'; }
 vendre() { this.statut = 'Vendue'; }
}
export default Voiture;