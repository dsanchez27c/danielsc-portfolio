import "src/App.css";
import Content from "src/components/content/Content";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";

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
