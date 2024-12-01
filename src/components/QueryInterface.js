import React, { useState } from 'react';

const QueryInterface = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleExecuteQuery = async () => {
    setLoading(true);
    setError(null);

    try {
      // Exemple de requête pour SPARQL
      const response = await fetch('https://query.wikidata.org/sparql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sparql-query',
          Accept: 'application/json',
        },
        body: query,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’exécution de la requête');
      }

      const data = await response.json();
      setResults(data.results.bindings);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="query-interface">
      <h2>Interface de Requêtes</h2>
      <textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Écrivez votre requête SPARQL ici..."
        rows="10"
        cols="50"
      />
      <button onClick={handleExecuteQuery} disabled={loading}>
        {loading ? 'Exécution...' : 'Exécuter la Requête'}
      </button>
      {error && <p className="error">Erreur : {error}</p>}
      {results.length > 0 && (
        <div className="results">
          <h3>Résultats :</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {JSON.stringify(result)} {/* Remplacez cela par un affichage formaté */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueryInterface;
