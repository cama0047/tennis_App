import React, { useState, useEffect } from "react";

function Data() {
  const API_K = "AIzaSyCTCnqL-wuTaDfR091S73p0ixcklX0wNF0";

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  async function getData() {
    await fetch(
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
      })
      .finally(() => {
        setLoading(false);
      });
  }
 
  useEffect(() => {
    setTimeout(getData, 5000);
  });

  if (loading) return "Loading...";
  if (error) return "Error...";

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {data.features.map((item) => {
        return (
          <>
            <div key={item.PARK_ID} class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">{item.attributes.PARKNAME}</h5>
                  <p class="card-text">
                    <div class="row">
                      <div class="col">Benches?: {item.attributes.BENCHES}</div>
                      <div class="col">Lights?: {item.attributes.LIGHTS}</div>
                    </div>
                    Address: {item.attributes.ADDRESS}
                    <div class="row">
                      <div class="col">
                        <button type="button" class="btn btn-secondary">
                          Map
                        </button>
                      </div>
                      <div class="col">
                        <button type="button" class="btn btn-primary">
                          Reserve
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Data;
