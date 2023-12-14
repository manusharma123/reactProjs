// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");


  //logic
  let calBmi=(e)=>{
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const calculatedBMI = weight / (height * height);
      setBMI(calculatedBMI.toFixed(2));
      setMsg("");
    } else {
      setMsg("Enter valid input");
    }
    

  }

  let reload=()=>{
    window.location.reload();
  }





  return (
    <div className="App">
      <div className="container">
        <h1>BMI calculator</h1>
        <hr/>
        <br/>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight: </label>
            <input type="txt" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <br/>
          <div>
            <label>Height: </label>
            <input type="txt" placeholder="Enter height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <br/>
          <div >
            <button className="button-21" type="submit">Calculate</button>
            <button className="button-21" type="reset" onClick={reload}>Reset</button>
          </div>
          <br/>
          <div>
            <strong> {bmi}</strong>
          <br/>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;




// let bmi = (weight / (height * height) * 703).toFixed(1);
// console.log(bmi);
// setBmi("your BMI is: "+bmi);