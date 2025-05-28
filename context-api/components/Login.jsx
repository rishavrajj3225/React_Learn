import React, {useState,useContext} from 'react'
import userContext from '../src/context/userContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const context = useContext(userContext);
    const setUser =context && context.setUser;
    const handleSubmit=(e)=>{
        e.preventDefault()// by defalut submit krne pe post method ki wajah se kahi na kahi value chala jata hai
        setUser({username,password})
    }
    // data set krna ka 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="usename"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login