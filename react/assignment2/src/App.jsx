import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import "./App.css";
import FloatingButton from "./Components/FloatingButton";
function App() {
  return (
    <div>
      <Header/>
      <div className="container">
      <Section1/>
      <Section2/>
      <Footer/>
      </div>
      
      <FloatingButton />
    </div>
  );
}

export default App;