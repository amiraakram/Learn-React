
import "./SignUp.css";

function SignIn({ goToHome }) {
  return (
    <div className="container">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="Confirm password" placeholder="Confirm Password" />

      <button onClick={goToHome}>Sign In</button>
    </div>
  );    
}

export default SignIn;