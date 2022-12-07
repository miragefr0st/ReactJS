import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="En Tendances" fetchUrl={requests.fetchTrending} />
      <Row title="MasterClass" fetchUrl={requests.fetchTopRated} />
      <Row title="Actions" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horreurs" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantiques" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
