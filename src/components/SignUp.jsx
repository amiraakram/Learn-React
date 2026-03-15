import "./SignUp.css";

function Signup() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="Confirm password" placeholder="Confirm Password" />

      <button>Sign Up</button>
    </div>
  );
}

export default Signup;