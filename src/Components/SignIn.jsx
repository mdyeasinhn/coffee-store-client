import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext)
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signInUser(email, password)
        .then(res=>{
            console.log(res.user);
            const user ={
                email,
                lastLoggedAt: res.user?.metadata?.lastSignInTime
            }
            // updata lastLoggend at in the database
            fetch('https://coffee-making-server-three.vercel.app/user',{
                method:"PATCH",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })

            
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
        <h2 className="text-3xl text-center mt-4">Please Login</h2>
        <form onSubmit={handleSignIn} className="card-body y md:w-3/4 lg:w-1/2 mx-auto ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="Password" className="input input-bordered" required />

            
            </div>
            <div className="form-control mt-1">
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-3">
                <button name="submit" className="btn btn-primary">Login</button>
            </div>
            <p className="text-center mt-4">Do Not Have An Account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>

    
        </form>

    </div>
    );
};

export default SignIn;