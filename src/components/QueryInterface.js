import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";


const QueryInterface = () => {
  const [appName, setAppName] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [chartData, setChartData] = useState(null);
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


      if (data.results.bindings[0]?.styleCount) {
        const labels = data.results.bindings.map((item) => item.architecturalStyle.value);
        const counts = data.results.bindings.map((item) => parseInt(item.styleCount.value, 10));

        setChartData({
          labels,
          datasets: [
            {
              label: "Architectural Styles",
              data: counts,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#8E44AD",
                "#2ECC71",
              ],
            },
          ],
        });
      }
    } catch (err) {
      setError(err.message);
      setResults(null);
      setChartData(null);
    }
  };

  const formatResults = (results) => {
    return results.map((result, index) => (
      <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        <p><strong>Nom de l'Eglise:</strong> {result.nomLocal?.value}</p>
        <p><strong>Local Style:</strong> {result.styleArchi?.value}</p>
        <p><strong>Description:</strong> {result.localDescription?.value}</p>
      </div>
    ));
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Section explicative stylisée */}
        <div style={styles.instructions}>
          <p style={styles.intro}>
            Ce projet a pour but d'interroger une base SPARQL de manière locale avec notre site.
            Mais aussi permettre d'interroger Wikidata à travers lui.
          </p>
          <p style={styles.stepsTitle}>Pour cela, vous n'avez que trois choses à faire :</p>
          <ol style={styles.steps}>
            <li>Choisissez un nom pour votre application web ayant un rapport avec votre requête.</li>
            <li>Entrez le lien de votre Endpoint SPARQL où figure votre base de données.</li>
            <li>Tapez votre requête SPARQL pour interroger votre base ou Wikidata et obtenez un résultat.</li>
          </ol>
        </div>

        {/* Interface SPARQL */}
        <h1 style={styles.title}>Interface pour requête SPARQL</h1>
        <div style={styles.field}>
          <label style={styles.label}>Le nom de l'application :</label>
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>SPARQL Endpoint :</label>
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
            rows="30"
            style={styles.textarea}
          />
        </div>
        <button onClick={handleQueryExecution}>Executer la requête</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {results && chartData ? (
        <div>
              <h2>Style Architectural des églises</h2>
              <Pie data={chartData} />
            </div>
          ) : results && results.length > 0 ? (
            <div>
              <h2>Résultat de la requête</h2>
              {formatResults(results)}
            </div>
          ) : (
            <p>Aucun Résultat.</p>
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
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  instructions: {
    marginBottom: "30px",
    textAlign: "left",
  },
  intro: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  stepsTitle: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  steps: {
    listStyleType: "decimal",
    marginLeft: "20px",
    lineHeight: "1.6",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.5rem",
    color: "#333",
  },
  field: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default QueryInterface;
