import React from "react";
import './LoginForm.css';
import { FaClipboardUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
const LoginForm =()=>{
    return(
        <div className="wrapper">
            <form action="">
                    <h1>Login</h1>
                    <div className="input-box"><input type="text" placeholder="Username" required />
                    <FaClipboardUser className="icon"/>
                    </div>
                    <div className="input-box"><input type="password" placeholder="Password" required />
                    <IoIosLock className="icon"/>
                    </div>


                    <div className="remember-forgot">
                        <label> <input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="Register.jsx"> Register</a></p>
                        </div>
            </form>
        </div>

    );
}
export default LoginForm;