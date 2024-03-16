import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Special from "./components/Special";
import Place from "./components/Place";
import Blog from "./components/Blog";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Special />
        <Products />
        <Place />
        <Blog />
      </main>
    </>
  );
}

export default App;
