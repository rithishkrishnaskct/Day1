import React from "react";
import './Register.css';
import { FaClipboardUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

const Register =()=>{
    return(
        <div className="wrapper">
            <form action="">
                    <h1>Register</h1>
                    <div className="input-box"><input type="text" placeholder="Username" required />
                    <FaClipboardUser className="icon"/>
                    </div>
                    <div className="input-box"><input type="password" placeholder="Password" required />
                    <IoIosLock className="icon"/>
                    </div>
                    <div className="input-box"><input type="password" placeholder="Confirm password" required />
                    <IoIosLock className="icon"/>
                    </div>
                    <div className="input-box"><input type="tel" placeholder="+91 99999 99999"  max={10} required />
                    <FaSquarePhone className="icon" />

                    </div>


                    <div className="remember-forgot">
                        <label> <input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>Have an account? <a href="#">Login</a></p>
                        </div>

                        
                       
            </form>
        </div>

    );
}
export default Register;