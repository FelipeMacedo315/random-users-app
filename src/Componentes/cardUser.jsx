import React, { useContext, useEffect } from "react";
import Icon from "./icon";

export default function CardUser({ infoUser, indexUser }) {
  useEffect(() => {
    console.log(infoUser);
  });
  return (
    <div className="card-info">
      <div className="photo-and-name">
        <Icon/>
        <img src={infoUser[indexUser].picture.large} alt="photo-profile" />
        <h1>
          {infoUser[indexUser].name.title +
            " " +
            infoUser[indexUser].name.first +
            " " +
            infoUser[indexUser].name.last}
        </h1>
      </div>
      <div className="card-list-info">
        <p>
          Street:{" "}
          <span>
            {infoUser[indexUser].location.street.name}
            {infoUser[indexUser].location.street.number}
          </span>
        </p>
        <p>
          City: <span>{infoUser[indexUser].location.city}</span>
        </p>
        <p>
          State: <span>{infoUser[indexUser].location.state}</span>
        </p>
        <p>
          Country: <span>{infoUser[indexUser].location.country}</span>
        </p>
        <p>
          Email: <span>{infoUser[indexUser].email}</span>
        </p>
        <p>
          Phone: <span>{infoUser[indexUser].phone}</span>
        </p>
        <p>
          Cell: <span>{infoUser[indexUser].cell}</span>
        </p>
      </div>
    </div>
  );
}
