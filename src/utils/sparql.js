//--- Fichier dédié pour (les utilitaires) la gestion des requêtes SPARQL
export const executeSparqlQuery = async (endpoint, query) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sparql-query',
          Accept: 'application/json',
        },
        body: query,
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
  
      const data = await response.json();
      return data.results.bindings;
    } catch (error) {
      console.error("Erreur lors de la requête SPARQL :", error);
      throw error;
    }
  };
  