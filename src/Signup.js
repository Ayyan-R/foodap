import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css"; // optional for custom styles

function Signuppage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Generate username automatically
  const handleUsername = (type, value) => {
    if (type === "first") setFirstname(value);
    if (type === "second") setLastname(value);

    const newUsername =
      (type === "first" ? value : firstname) +
      (type === "second" ? value : lastname);

    setUsername(newUsername.toLowerCase());
  };

  // Password strength checker
  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(pwd)) return "Strong";
    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname) {
      toast.error("First name and Last name are required!");
      return;
    }

    if (!password) {
      toast.error("Password is required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Account created successfully 🚀");

    // reset
    setFirstname("");
    setLastname("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="Signup-wrapper">
        <div className="Signup-maincontainer">
          <h1 className="Signup-h1">SignUp</h1>

          <input
            className="firstname"
            type="text"
            placeholder="Enter your first Name"
            value={firstname}
            onChange={(e) => handleUsername("first", e.target.value)}
          />
          {!firstname && <p className="error">First name is required</p>}

          <input
            className="lastname"
            type="text"
            placeholder="Enter your last Name"
            value={lastname}
            onChange={(e) => handleUsername("second", e.target.value)}
          />
          {!lastname && <p className="error">Last name is required</p>}

          <input
            className="username"
            type="text"
            placeholder="Generated Username"
            value={username}
            readOnly
          />

          <input
            className="password"
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <p
              className={`strength ${checkPasswordStrength(password).toLowerCase()}`}
            >
              Strength: {checkPasswordStrength(password)}
            </p>
          )}

          <input
            className="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword &&
            confirmPassword !== password && (
              <p className="error">Passwords do not match</p>
            )}

          <button
            type="submit"
            className="cr-button"
            onClick={handleSubmit}
            disabled={!firstname || !lastname || !password || password !== confirmPassword}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Signuppage;
