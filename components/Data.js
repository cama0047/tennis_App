import React, { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(
      "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/21/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data); // <----PRINT
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  });

  return <div>Data</div>;
}

export default Data;
