import React from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets  from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
{!user ? (
  <Login />
):(
<div>
       <Header /> 


       <div className="app_body">

       <Sidebar /> 
       <Feed />
       <Widgets />

       </div> 
</div>
)}
      
      



    </div>
  );
}

export default App;
