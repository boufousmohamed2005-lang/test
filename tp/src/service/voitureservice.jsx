import Voiture from '../model/voiture';
class GestionVoituresService {
 constructor() {
 this.voitures = [];
 this.nextId = 1;
 this.initialiserDonnees();
}
 initialiserDonnees() {// Données d'exemple
 this.ajouterVoiture({
 marque: "Toyota",
 modele: "Corolla",
 annee: 2022,
 couleur: "Bleu",
 prix: 25000,
 kilometrage: 15000,
 carburant: "Hybride" });

 this.ajouterVoiture({
 marque: "Renault",
 modele: "Clio",
 annee: 2021,
 couleur: "Rouge",
 prix: 18000,
 kilometrage: 25000,
 carburant: "Essence" });

 this.ajouterVoiture({
 marque: "Peugeot",
 modele: "3008",
 annee: 2023,
 couleur: "Noir",
 prix: 35000,
 kilometrage: 5000,
 carburant: "Diesel" });
 this.ajouterVoiture({
 marque: "Tesla",
 modele: "Model 3",
 annee: 2023,
 couleur: "Blanc",
 prix: 45000,
 kilometrage: 8000,
 carburant: "Électrique" });

}
 // CREATE
 ajouterVoiture(voitureData) {
 const nouvelleVoiture = new Voiture(
 this.nextId++,voitureData.marque,
 voitureData.modele,
 voitureData.annee,
 voitureData.couleur,
 voitureData.prix,
 voitureData.kilometrage,
 voitureData.carburant,
 voitureData.statut || 'Disponible' );

 this.voitures.push(nouvelleVoiture);
 return nouvelleVoiture;
 }
// READ
getToutesVoitures() { return [...this.voitures]; }
getVoitureParId(id) {
 return this.voitures.find(voiture => voiture.id === id);}
getVoituresDisponibles() {
 return this.voitures.filter(voiture => voiture.statut === 'Disponible');}
getVoituresParMarque(marque) {
 return this.voitures.filter(voiture => voiture.marque === marque); }
 // UPDATE
modifierVoiture(id, donneesModifiees) {
 const index = this.voitures.findIndex(voiture => voiture.id === id);
 if (index !== -1) {
 this.voitures[index] = { ...this.voitures[index], ...donneesModifiees };
 return this.voitures[index]; }
 return null; }
changerStatutVoiture(id, nouveauStatut) {
 const voiture = this.getVoitureParId(id);
 if (voiture) {voiture.statut = nouveauStatut;
 return voiture;}
 return null; }
 // DELETE
supprimerVoiture(id) {
 const index = this.voitures.findIndex(voiture => voiture.id === id);
 if (index !== -1) {return this.voitures.splice(index, 1)[0]; }
 return null; }
 // Statistiques
getStatistiques() {
const total = this.voitures.length;
const disponibles =this.voitures.filter(v=>v.statut==='Disponible').length;
const moyennePrix = total > 0 ? this.voitures.reduce((sum, v) => sum +
v.prix, 0) / total : 0;
 const marques = {};
 this.voitures.forEach(voiture => {
 marques[voiture.marque] = (marques[voiture.marque] || 0) + 1; });
 const marquePlusRepresentee = Object.keys(marques).reduce((a, b) =>
 marques[a] > marques[b] ? a : b, '' ); return { total, disponibles,
 vendues: this.voitures.filter(v => v.statut === 'Vendue').length,
 enRevision: this.voitures.filter(v => v.statut === 'En révision').length,
 moyennePrix: Math.round(moyennePrix), marquePlusRepresentee,
 totalValeurStock: this.voitures.reduce((sum, v) => sum + v.prix, 0) };}
// Recherche
rechercherVoitures(term) {
 return this.voitures.filter(voiture =>
 voiture.marque.toLowerCase().includes(term.toLowerCase()) ||
 voiture.modele.toLowerCase().includes(term.toLowerCase()) ||
 voiture.couleur.toLowerCase().includes(term.toLowerCase())
 );
 }
}
export default GestionVoituresService;