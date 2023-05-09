import React, { useEffect, useState } from "react";
import "./App.css";
import "./Responsive.css";

import Mycontext from "./contexto";
import axios from "axios";
import CardUser from "./Componentes/cardUser";
import SearchBar from "./Componentes/searchBar";
import Footer from "./Componentes/footer";
import Panel from "./Componentes/panel";
function App() {
  const [fetchApi, setFetchApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [idxUser, setIdxUser] = useState("");

  async function getUser() {
    const callApi = await axios.get(
      `https://randomuser.me/api/?results=10&page=${currentPage}`
    );
    const responseApi = await callApi.data.results;
    setFetchApi(responseApi);
    console.log(fetchApi);
  }

  useEffect(() => {
    getUser();
  }, [currentPage]);

  return (
    <Mycontext.Provider
      value={{
        currentPage,
        setCurrentPage,
        showModal,
        setShowModal,
        setIdxUser,
        fetchApi,
        setFetchApi,
      }}
    >
      <main>
        <header>
          <div className="container-header">
            <h1>User List</h1>
          </div>
        </header>
        <Panel />
        <div>
          {showModal ? (
            <CardUser infoUser={fetchApi} indexUser={idxUser} />
          ) : null}
        </div>
        <Footer />
      </main>
    </Mycontext.Provider>
  );
}
export default App;
