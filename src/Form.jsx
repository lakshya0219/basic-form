import { useEffect, useState } from "react";


const Form = () =>
  {
    const data = {name:"",email:"",password:""};
    const[val, setVal] = useState(data);
    const[flag, setFlag] = useState(false);
    useEffect(()=>{
          console.log("You have registered");
    },[flag])

    const handleOnChange =(e) =>
    {
       setVal({...val, [e.target.name]:e.target.value});
       console.log(val);
    }
    function handleOnSubmit(event)
    {
    event.preventDefault();

    if(!val.name || !val.email || !val.password)
      {
        alert("All fields are mandatory")
      }
      else{
        setFlag(true);
      }
    }
   
    return (
      <>
      <pre>{flag ? (<h3>Dear {val.name}, you've successfully registered</h3>) :( "")}</pre>

    <form onSubmit={(event)=>handleOnSubmit(event)}>
      <div>
          <header>
            <h2>Registration Form</h2>
          </header>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>handleOnChange(e)} value={val.name}></input>
            <br></br>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={(e)=>handleOnChange(e)} value={val.email}></input>
            <br></br>
            <label>Password</label>
            <input type="text" name="password" placeholder="Enter your password" onChange={(e)=>handleOnChange(e)} value={val.password}></input>
            <button type="submit">Submit</button>
          </div>
      </div>
    </form>
    </>
    );
  }
  export default Form;