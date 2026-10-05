import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Добро пожаловать!</h2>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
