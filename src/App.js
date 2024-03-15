import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Special from "./components/special";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Special />
      </main>
    </>
  );
}

export default App;
