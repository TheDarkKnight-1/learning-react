import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import ToDos from "./MyComponents/ToDos"
import Footer from "./MyComponents/Footer"

function App() {
    const onDelete=()=>{
        console.log("I am on Delete");
    }
  let items=[
      {
          slno:1,
          title:"Go for a walk",
          desc:"I need to go for a walk at 5:00 pm"
      },
      {
          slno:1,
          title:"Have Food",
          desc:"I need to have food at 8:00 pm"
      },
      {
          slno:1,
          title:"Study",
          desc:"I need to study at 9:00 pm"
      }
  ]
  return (
   <>
  <Header title="ToDO" searchBar={true}/>
  <ToDos items={items} onDelete={onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
