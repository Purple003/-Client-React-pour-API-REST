import React, { useState } from 'react';

function CompteForm({ onAjouterCompte }) {
  // Initialisation de l'état pour stocker les données du formulaire
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: 'COURANT' });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Validation simple
    if (!compte.solde || !compte.dateCreation) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Ajouter le compte via la fonction passée en props
    onAjouterCompte({
      solde: parseFloat(compte.solde),
      dateCreation: compte.dateCreation,
      type: compte.type
    });

    // Réinitialiser le formulaire
    setCompte({ solde: '', dateCreation: '', type: 'COURANT' });
    alert('Compte ajouté avec succès !');
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input
            type="number"
            name="solde"
            value={compte.solde}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input
            type="date"
            name="dateCreation"
            value={compte.dateCreation}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            value={compte.type}
            className="form-select"
            onChange={handleChange}
          >
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;