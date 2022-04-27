import "./App.scss";

import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Nav />
      <Summary />
      {/* <Button />*/}
      <section className="cards">
        <Cards />
      </section>
    </div>
  );
}

export default App;
