import React, { useContext } from "react";
import Mycontext from "../contexto";

function Icon() {
  const { setShowModal } = useContext(Mycontext);

  return (
    <svg
      onClick={() => setShowModal(false)}
      className="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 256 256"
    >
      <g
        fill="#013582"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 256V0h256v256z"></path>
      </g>
      <path
        fill="#fff"
        strokeMiterlimit="10"
        d="M7 4a.995.995 0 00-.707.293l-2 2a.999.999 0 000 1.414L11.586 15l-7.293 7.293a.999.999 0 000 1.414l2 2a.999.999 0 001.414 0L15 18.414l7.293 7.293a.999.999 0 001.414 0l2-2a.999.999 0 000-1.414L18.414 15l7.293-7.293a.999.999 0 000-1.414l-2-2a.999.999 0 00-1.414 0L15 11.586 7.707 4.293A.996.996 0 007 4z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(8.53333)"
      ></path>
    </svg>
  );
}

export default Icon;
