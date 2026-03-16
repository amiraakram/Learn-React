import reactlogo from "./assets/react.svg";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import { useState } from "react";




function App() {

  const [page, setPage] = useState("SignUp");

  if (page === "SignUp") {
    return <Signup goToSignIn={() => setPage("SignIn")} />;
  }

  else if (page === "SignIn") {
    return <SignIn goToHome={() => setPage("Home")} />;
  }

  else {
    return <Home />;
  }

}

export default App;