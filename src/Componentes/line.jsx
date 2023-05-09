import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Mycontext from "../contexto";
export default function Line({
  photo,
  name,
  city,
  registered,
  gender,
  indexUser,
}) {
  const { setShowModal, setIdxUser } = useContext(Mycontext);

  return (
    <>
      <div className="line">
        <img src={photo} alt="photo-thumbnail-profile" />
        <span>{name}</span>
        <span>{city}</span>
        <span>{gender}</span>
        <span>{registered}</span>
        <Button
        size="sm"
          variant="primary"
          active
          onClick={() => {
            setShowModal(true);
            setIdxUser(indexUser);
          }}
        >
          View
        </Button>
      </div>
    </>
  );
}
