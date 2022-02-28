import React, { useContext } from "react";
import Mycontext from "../contexto";

function Card(props) {
  const { cardVisible, setCardVisible } = useContext(Mycontext);
  return (
    <div className="Card">
      <img
        alt="close"
        onClick={() => {
          setCardVisible(false);
        }}
        className="close-icon"
        src="close-icon-13612.png"
      />
      <div className="content-info">
        <img src={props.info.picture.large} alt="Profile" />
        <h1>
          {props.info.name.title +
            " " +
            props.info.name.first +
            " " +
            props.info.name.last}
        </h1>
        <ol>
          <li>Phone: {props.info.phone}</li>
          <li>
            Data de nascimento:&nbsp;
            {props.info.dob.date.slice(8, 10) +
              "/" +
              props.info.dob.date.slice(5, 7) +
              "/" +
              props.info.dob.date.slice(0, 4)}
          </li>
          <li>
            Rua: {props.info.location.street.name} &nbsp;
            <b>N°:</b>&nbsp;
            {props.info.location.street.number}
          </li>
          <li>Cidade: {props.info.location.city}</li>
          <li>Estado: {props.info.location.state}</li>
          <li>País: {props.info.location.country}</li>
          <li>Genêro: {props.info.gender}</li>
          <li>Email: {props.info.email}</li>
        </ol>
      </div>
    </div>
  );
}
export default Card;
