import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import Mycontext from "../contexto";
export default function Pages() {
  const { currentPage, setCurrentPage } = useContext(Mycontext);

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setCurrentPage(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
