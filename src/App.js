import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Cursor from "./Components/Cursor";
function App() {
  return (
    <div div className="bg-black min-h-screen w-full">
      <Cursor />
      <NavBar />    
      <Header />
      <Footer />
    </div>
  );
}
export default App;
