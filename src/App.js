import React, { useEffect, useState } from "react";
import Card from "./Componentes/card.jsx";
import "./App.css";
import Mycontexto from "./contexto.js";
function App() {
  const [data, setData] = useState([]);
  const [cardVisible, setCardVisible] = useState(false);
  const [indice, setIndice] = useState(0);
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetchData();
  }, [gender]);

  async function fetchData() {
    const search = await fetch(`https://randomuser.me/api/?results=10&gender=${gender}`);
    const response = await search.json();
    setData(response.results);
  }
  console.log(data);
  function handleCard() {
    if (cardVisible) {
      return <div>{<Card info={data[indice]} />}</div>;
    } else {
      return null;
    }
  }

  return (
    <Mycontexto.Provider value={{ cardVisible, setCardVisible }}>
      <header></header>
      <div className="App">
        <div className="btns-gender">
          <button onClick={()=>{
            setGender('male')
          }} id="btn-male">Male</button>
          <button onClick={()=>{
            setGender('female')
          }} id="btn-female">Female</button>
          <button onClick={()=>{
            setGender('')
          }} id="btn-ambos">Ambos</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genêro</th>
              <th>Nascimento</th>
              <th>Mais...</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.name.title + " " + item.name.first + " " + item.name.last}
                  </td>
                  <td>{item.gender}</td>
                  <td>
                    {item.dob.date.slice(8, 10) +
                      "/" +
                      item.dob.date.slice(5, 7) +
                      "/" +
                      item.dob.date.slice(0, 4)}
                  </td>
                  <td>
                    <button
                      className="btn-view"
                      onClick={() => {
                        setCardVisible(!cardVisible);
                        setIndice(index);
                        handleCard();
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {handleCard()}
      </div>
    </Mycontexto.Provider>
  );
}
export default App;
