import './App.css';
import Row from './Row';
import requests from "./requests"
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="Trendig Now" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovie} />
      {/* <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} /> */}

    </div>
  );
}

export default App;
