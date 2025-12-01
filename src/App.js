import React, { useState, useEffect } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
import API_BASE_URL from './config';

function App() {
  const [comptes, setComptes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les comptes au démarrage
  useEffect(() => {
    fetchComptes();
  }, []);

  const fetchComptes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/comptes`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des comptes');
      }
      const data = await response.json();
      setComptes(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  const ajouterCompte = async (nouveauCompte) => {
    try {
      const response = await fetch(`${API_BASE_URL}/comptes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nouveauCompte),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du compte');
      }

      const compteAjoute = await response.json();
      setComptes([...comptes, compteAjoute]);
      return true;
    } catch (err) {
      setError(err.message);
      console.error('Erreur:', err);
      alert('Erreur lors de l\'ajout du compte: ' + err.message);
      return false;
    }
  };

  return (
    <div>
      {error && (
        <div className="alert alert-danger m-3" role="alert">
          {error}
        </div>
      )}
      <CompteForm onAjouterCompte={ajouterCompte} />
      {loading ? (
        <div className="text-center m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      ) : (
        <CompteList comptes={comptes} />
      )}
    </div>
  );
}

export default App;