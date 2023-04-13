import "./App.css";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <MainContent />

        <BookDetails />
      </div>
    </div>
  );
}

export default App;
