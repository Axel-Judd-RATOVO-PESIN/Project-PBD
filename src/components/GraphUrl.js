import React, { useState } from 'react';

const GraphUrl = () => {  
  return (
    <div className="query-interface">
      <h2>Quel graphe de connaissance aller vous interroger ?</h2>
         <input type="text" placeholder="Copier ici votre SPARQL endpoint" />
      </div>
  );
};

export default GraphUrl;
