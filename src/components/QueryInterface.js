import React, { useState } from 'react';

const QueryInterface = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [graphDbEndpoint, setGraphDbEndpoint] = useState(''); // Champ pour GraphDB endpoint
  const [appName, setAppName] = useState(''); // Champ pour le nom de l'application

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAppNameChange = (e) => {
    setAppName(e.target.value);
  };

  const handleGraphDbEndpointChange = (e) => {
    setGraphDbEndpoint(e.target.value);
  };

  const handleExecuteQuery = async () => {
    if (!graphDbEndpoint) {
      setError('Veuillez entrer l\'URL de votre endpoint GraphDB.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(graphDbEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          query: query,
          format: 'json',
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’exécution de la requête');
      }

      const data = await response.json();
      const bindings = data.results.bindings;

      setResults(bindings);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="query-interface">
      <h2>Interface de Requêtes SPARQL pour GraphDB</h2>

      {/* Champ pour le nom de l'application */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={appName}
          onChange={handleAppNameChange}
          placeholder="Nom de votre application web"
        />
      </div>

      {/* Champ pour l'URL du SPARQL endpoint (GraphDB) */}
      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          value={graphDbEndpoint}
          onChange={handleGraphDbEndpointChange}
          placeholder="Entrez l'URL de votre endpoint GraphDB (SPARQL)"
        />
      </div>

      {/* Champ pour la requête SPARQL */}
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

      {/* Affichage de l'erreur */}
      {error && <p className="error">Erreur : {error}</p>}

      {/* Affichage des résultats */}
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
                    <td key={idx}>
                      {value.type === 'literal' ? value.value : value['xml:lang'] || value.value}
                    </td>
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
