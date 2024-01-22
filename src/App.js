import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
 /* const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName);
  console.log(lastName);
  function changeFirstNameHolder(event){
      //console.log("print first name");
      //console.log(event.target.value);
      setFirstName(event.target.value);
  }
  function changeLastNameHolder(event){
    //console.log("print last name");
     // console.log(event.target.value);
     setLastName(event.target.value);   
  }*/

  const [formData,setFormData]=useState( {firstName:"", lastName:"",email:"",
  comments:"",isvisible:true,mode:"",favCar:""});
  console.log(formData.email)
  console.log(formData.firstName);
  console.log(formData.lastName);


  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
       // [event.target.name]:event.target.value (no use of this below short form)
       [name]: type === "checkbox" ? checked:value
      }
    });
  }
  function submitHandler (event){
    event.preventDefault();
    console.log("finally print the entire form");
    console.log(formData);

  }

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input type="text"
      placeholder="first name"
      onChange={changeHandler}
      name="firstName"
      value={formData.firstName}
      />
      <br/>
      <br/>

<input type="text"
      placeholder="last name"
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName}/>
      <br/>
      <br/>

<input type="text"
      placeholder="email"
      onChange={changeHandler}
      name="email"
      value={formData.email}/>
      <br/>
      <br/>
      <textarea 
       placeholder="enter your comments here"
       onChange={changeHandler}
       name="comments"
       value={formData.comments}
      />
      <br/>
      <br/>

      <input
      type="checkbox"
      onChange={changeHandler}
      name="isvisible"
      id="isvisible" 
      checked={formData.isvisible}/>
      <label htmlFor='isvisible'>Am i visible?</label>
      <br/>
      <br/>
      <fieldset>
        <legend>Mode</legend>
        <input type="radio"
      onChange={changeHandler}
      name="mode"
      value="Ofline-Mode"
      id="Ofline-Mode"
      checked={formData.mode === "Ofline-Mode"}
      />
      <label htmlFor="Ofline-Mode">Ofline-mode</label>

      <input type="radio"
      onChange={changeHandler}
      name="mode"
      value="Online-Mode"
      id="Online-Mode"
      checked={formData.mode === "Ofline-Mode"}
      />
      <label htmlFor="Online-Mode">Online-mode</label>
      </fieldset>
      <label htmlFor="favCar">Your Fav car</label>
      <select
      name="favCar"
      id="favCar"
      value={formData.favCar}
      onChange={changeHandler}
    >
      <option value="scorpio">Scorpio</option>
      <option value="fortuner">Fortuner</option>
      <option value="thar">Thar</option>
      <option value="legender">Legender</option>
      <option value="defender">Defender</option> 
      </select>
      <br/>
      <br/>
     {/*<input type="submit" value="submit"/>*/}
     <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
