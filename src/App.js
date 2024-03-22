import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import HamburgerProvider from "./context/hamburger.context";

function App() {

  return (
    <div className="App ">
      <HamburgerProvider>
        <Navbar />

        <Products />
        <Footer />
      </HamburgerProvider>

    </div>
  );
}

export default App;
