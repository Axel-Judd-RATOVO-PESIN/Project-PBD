import React, { useState } from "react";

const QueryInterface = () => {
  const [appName, setAppName] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleQueryExecution = async () => {
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await fetch(`${endpoint}?query=${encodedQuery}`, {
        method: "GET",
        headers: {
          Accept: "application/sparql-results+json",
          "Content-Type": "application/sparql-results+json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data.results.bindings);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResults(null);
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
      <p>
        Ce projet a pour but d'interroger une base SPARQL de manière local avec notre site. <br/>
        Mais aussi que l'on puisse interroger Wikidata à travers lui.
        <br/>
        <br/>
        Pour cela vous n'avez que trois choses à faire : 
        <br/>
        <br/>
        <br/>
        <strong> 1. </strong> Choisissez un nom pour votre application web ayant un rapport avec votre requête !! <br/>
        <strong> 2. </strong> Entrez le lien de votre Endpoint SPARQL où figure votre base de donnée.<br/>
        <strong> 3. </strong> Tapez votre requête SPARQL pour interroger votre base de donnée ou Wikidata et obtenez un résultat.<br/>

      </p>



        <h1 style={styles.title}>Interface pour requête SPARQL</h1>
        <div style={styles.field}>
          <label style={styles.label}>Le nom de l'application:</label>
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>SPARQL Endpoint:</label>
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Requête SPARQL :</label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="30" // Réduction de la hauteur
            style={styles.textarea}
          />
        </div>
        <button style={styles.button} onClick={handleQueryExecution}>
          Executer la requête  SPARQL :
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {results && (
          <div>
            <h2>Résultat de la requête</h2>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </div>
        )}
      </div>
    </main>
  );
};

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  container: {
      maxWidth: "600px",
      margin: "0 auto",
  },
  title: {
      marginTop : "30px",
      textAlign: "center",
      marginBottom: "20px",
  },
  field: {
      marginBottom: "30px",
  },
  label: {
      display: "block", // Texte au-dessus de l'input
      marginBottom: "5px",
      fontWeight: "bold",
  },
  input: {
    width: "100%", // Input plus large
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%", // Plus large que les inputs
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none", // Empêche le redimensionnement manuel
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    marginTop: "10px",
  },
};

export default QueryInterface;
