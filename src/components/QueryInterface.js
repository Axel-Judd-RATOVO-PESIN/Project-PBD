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
    <div>
      <h1>SPARQL Query Interface</h1>
      <div>
        <label>
          Application Name:
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          SPARQL Endpoint:
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          SPARQL Query:
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="5"
          />
        </label>
      </div>
      <button onClick={handleQueryExecution}>Execute Query</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results && (
        <div>
          <h2>Query Results:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QueryInterface;
