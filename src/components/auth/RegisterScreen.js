import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterScreen() {
  return (
    <>
    <h3 className="auth__title">Register</h3>
    <form>
      <input type="text" placeholder="Name" name="name" className="auth__input" />
      <input type="text" placeholder="email" name="email" className="auth__input" />
      <input type="password" placeholder="contraseña" name="password" className="auth__input" />
      <input type="password" placeholder="Confirm" name="password2" className="auth__input" />

      <button type="submit" className="btn btn-primary btn-block mb-5">Login</button>
      
      <Link to={"/auth/login"} className="link">
    Already registered?
      </Link>
    </form>
  </>
  )
}
