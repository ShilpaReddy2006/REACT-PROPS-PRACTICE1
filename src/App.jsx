import Student from "./Student";
import React from "react";
import './App.css';
function App(){
  function showmessage(){
    
      alert("congratulations! you are selected.");
      
  }
  return(
    <div>
      <Student 
      name="SHILPA REDDY"
      age={20}
      course="COMPUTER SCIENCE ENGINEERING"
      skills={["java","springboot","react","docker","html","css","javascript","sql"]}
      isplaced={true}
      showmessage={showmessage}/>
    </div>
  );
}
export default App;
