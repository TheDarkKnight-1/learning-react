import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import ToDos from "./MyComponents/ToDos"
import Footer from "./MyComponents/Footer"

function App() {
  return (
   <>
  <Header title="ToDO" searchBar={true}/>
  <ToDos/>
  <Footer/>
  </>
  );
}

export default App;
