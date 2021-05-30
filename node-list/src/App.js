import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import ToDos from "./MyComponents/ToDos"
import Footer from "./MyComponents/Footer"
import AddTodos from "./MyComponents/AddTodos"
import React, { useState } from 'react';

function App() {
    const onDelete=(para)=>{
        console.log("I am on Delete",para);
        setTodos(items.filter((e)=>{
            return e!==para;
        }))
    }
    const [items,setTodos]=useState([
      {
          slno:1,
          title:"Go for a walk",
          desc:"I need to go for a walk at 5:00 pm"
      },
      {
          slno:2,
          title:"Have Food",
          desc:"I need to have food at 8:00 pm"
      },
      {
          slno:3,
          title:"Study",
          desc:"I need to study at 9:00 pm"
      },
      {
          slno:4,
          title:"Study",
          desc:"I need to study at 9:00 pm"
      }
  ])
  return (
   <>
  <Header title="ToDO" searchBar={true}/>
  <AddTodos/>
  <ToDos items={items} onDelete={onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
