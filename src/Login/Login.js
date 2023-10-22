import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../Feed/firebase";
import "./Login.css";

function Login() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [photoUrl, SetPhotoUrl] = useState("");
  const dispathch = useDispatch();
  const register = () => {
    if (!name) {
      alert("Please Enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photo: photoUrl,
          })
          .then(() => {
            dispathch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photo: photoUrl,
              })
            );
             }) ;
            }).catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispathch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photo: userAuth.user.photoURL,
      }))
    })
    .catch(error => alert(error))
  }
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" />
      <form>
        <input
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Full name"
          type="text"
        />
        <input
          value={photoUrl}
          onChange={(e) => SetPhotoUrl(e.target.value)}
          placeholder="profile pic Url"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
