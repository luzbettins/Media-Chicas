import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import Home from "./componentes/home/home";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CustomButton from "./componentes/button/CustomButton";
// import Button from "bootstrap/dist/css/bootstrap.min.css";
// import Intro from "./componentes/intro/intro";

function App() {
  return (
    <div className="App">
      {/* <Intro />
      <CustomButton texto="Ir a Linkedin" /> */}
      {/* <Button variant="success">Success</Button>{" "} */}

      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
