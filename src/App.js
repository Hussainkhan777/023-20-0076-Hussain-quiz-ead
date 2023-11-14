import "./App.css";

import Navbar1 from "./components/Navbar1";
import Welcome from "./components/Welcome";
import { Discover } from "./components/Discover";
import Auctions from "./components/Auctions";
import Footer from "./components/Footer";
function App() {
  const style1 = {
    backgroundColor: "#1F1D2B",
  };
  return (
    <>
      <div style={style1}>
        <Navbar1 />
        <Welcome />
        <Auctions />
        <Discover />
        <Footer />
      </div>
    </>
  );
}

export default App;
