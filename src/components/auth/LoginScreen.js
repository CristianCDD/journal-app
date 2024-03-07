import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { login, startLoginEmialPassword } from "../../actions/auth";

export default function LoginScreen() {

 const dispatch = useDispatch();

 const [formValues, handleInputChange] = useForm({
  email: "Cristian@gmail.com",
  password: "123456"
 });
 const {email, password} = formValues

 const handleLogin = (e) =>{
  e.preventDefault();
  dispatch(startLoginEmialPassword(email, password))
 }

 return (
  <> 
   <h3 className="auth__title">Login</h3>
   <form onSubmit={handleLogin}>
    <input type="text" placeholder="email" name="email" className="auth__input" value={email} onChange={handleInputChange} />
    <input type="password" placeholder="contraseña" name="password" className="auth__input" value={password} onChange={handleInputChange} />
    <button type="submit" className="btn btn-primary btn-block">Login</button>
    <div className="auth__social-networks">
     <p>Login with social network</p>
     <div className="google-btn">
      <div className="google-icon-wrapper">
       <img
        className="google-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
        width={100}
        alt="google button"
       />
      </div>
      <p className="btn-text">
       <b>Sign in with google</b>
      </p>
     </div>
    </div>
    <Link to={"/auth/register"} className="link">
   Create new acount
    </Link>
   </form>
  </>
 );
}