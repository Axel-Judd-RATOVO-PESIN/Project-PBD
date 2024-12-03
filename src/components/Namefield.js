import React, { useState } from 'react';

const Namefield = () => {  
  return (
    <div className="query-interface">
      <h2>Donner un nom pour l'application Web</h2>
         <input type="text" ng-model="myInputEndPoint" placeholder="Type here the name of your Web Application" />
      </div>
  );
};

export default Namefield;
