import { useState } from 'react'
import { auth, createUserWithEmailAndPassword,signOut } from "../config/firebase";
import Input from '../components/Input/Input'

function Signup() {
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
  let signup = () => {
    if (email === "" || password === "") {
      alert("hi")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        signOut(auth)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Input onChange={inputEmail} type={"email"} placeholder={"Enter Your Email"} value={email} />
      <Input onChange={inputPassword} type={"password"} placeholder={"Enter Your Password"} value={password} />
      <button onClick={signup}>Signup</button>
    </>
  )
}

export default Signup