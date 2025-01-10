
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {
    const { signIn }=useContext(AuthContext);
    const location=useLocation()
    console.log('location in the login page',location)
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location.state:'/')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>Do not Have An Account ? <Link to="/register" className="text-sky-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;