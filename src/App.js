import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [comptes, setComptes] = useState([
    { id: 1, solde: 1000, dateCreation: '2024-01-15', type: 'COURANT' },
    { id: 2, solde: 5000, dateCreation: '2024-02-20', type: 'EPARGNE' }
  ]);

  const ajouterCompte = (nouveauCompte) => {
    const compteAvecId = {
      ...nouveauCompte,
      id: comptes.length > 0 ? Math.max(...comptes.map(c => c.id)) + 1 : 1
    };
    setComptes([...comptes, compteAvecId]);
  };

  return (
    <div>
      <CompteForm onAjouterCompte={ajouterCompte} />
      <CompteList comptes={comptes} />
    </div>
  );
}

export default App;