import { useState } from 'react'
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import Input from '../components/Input/Input'

function Login() {
  let [email, SetEmail] = useState("")
  let [password, Setpassword] = useState("")

  let inputEmail = (e) => {
    // console.log(e.target.value);
    SetEmail(e.target.value)
  }
  let inputPassword = (e) => {
    // console.log(e.target.value);
    Setpassword(e.target.value)
  }
  let login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        console.log(error);

      });
  }

  return (
    <>
      <Input onChange={inputEmail} type={"email"} placeholder={"Enter Your Email"} value={email} />
      <Input onChange={inputPassword} type={"password"} placeholder={"Enter Your Password"} value={password} />
      <button onClick={login}>Login</button>
    </>
  )
}

export default Login