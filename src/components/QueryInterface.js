import React, { useState } from 'react';

const QueryInterface = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sparqlEndpoint = 'http://localhost:7200/repositories/Projet_Eglise_Unesco/sparql';

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleExecuteQuery = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(sparqlEndpoint, {
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
      <h2>Interface de Requêtes SPARQL</h2>
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
          <table>
            <thead>
              <tr>
                {Object.keys(results[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  {Object.values(result).map((value, idx) => (
                    <td key={idx}>{value.value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QueryInterface;
