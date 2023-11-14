import "./App.css";

import Navbar1 from "./components/Navbar1";
//import Discover from "./components/Discover";
import Welcome from "./components/Welcome";
import Auctions from "./components/Auctions";
function App() {
  return (
    <>
      <Navbar1 />
      <Welcome />
      <Auctions />
    </>
  );
}

export default App;
