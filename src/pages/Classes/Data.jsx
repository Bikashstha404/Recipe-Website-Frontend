import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => {
  //         // console.log(response);
  //         return response.json(); //json another promise
  //       })
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((apiData) => {
        console.log(apiData);
        setLoading(false);
        setData(apiData.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const mappedData = data.map((value) => (
    <div>
      <h2 style={{ color: "red" }}>{value.name}</h2>
      <h2>{value.body}</h2>
    </div>
  ));

  return (
    <>
      {/* <h1>Data fetching</h1> */}
      {/* {loading ? <h1>Loading</h1> : mappedData} */}
      {loading ? <h1>Loading</h1> : error ? <p>Error: {error}</p> : mappedData}
    </>
  );
}

// empty array [] --. comonent load huda kheri
// [state] --> State value change huda
// empty --> everytime Ui change huda kheri
