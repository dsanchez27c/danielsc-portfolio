import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <section className="app-main">
      <Header />
      <Content />
      <Footer />
    </section>
  );
}

export default App;
