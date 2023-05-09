import React, { useContext, useEffect } from "react";
import Line from "./line";
import Mycontext from "../contexto";
import { Spinner, Container } from "react-bootstrap";

function Panel(params) {
  const { currentPage, fetchApi } = useContext(Mycontext);

  let nameClassContainer = "container-spinner";
  fetchApi.length
    ? (nameClassContainer = "table")
    : (nameClassContainer = "container-spinner");

  function loadData(params) {
    if (fetchApi.length) {
      return fetchApi.map((item, idx) => {
        return (
          <Line
            indexUser={idx}
            photo={item.picture.thumbnail}
            name={item.name.first + " " + item.name.last}
            registered={
              item.registered.date.slice(8, 10) +
              "/" +
              item.registered.date.slice(5, 7) +
              "/" +
              item.registered.date.slice(0, 4)
            }
            city={item.location.city}
            gender={item.gender}
          />
        );
      });
    } else {
      return (
        <Spinner
          style={{ height: "15vh", width: "15vh" }}
          bsPrefix="spinner"
          animation="border"
          variant="info"
        ></Spinner>
      );
    }
  }
  return (
      <div className="table">
        <div className="table-header">
          <span>Image</span>
          <span>Name</span>
          <span>City</span>
          <span>Gender</span>
          <span>Registered</span>
          <span>Actios</span>
        </div>
        <div className={nameClassContainer}>{loadData()}</div>
      </div>
  );
}

export default Panel;
