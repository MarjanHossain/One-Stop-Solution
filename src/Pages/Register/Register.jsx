import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/image/facebook.png"
import google from "../../assets/image/google.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/Firebase.init';


const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let handleError;
    if (error) {
        handleError =
            <div >
                <p className="text-red-500">Error: {error.message}</p>
            </div>
    }
    if (user) {
        return (
            navigate("/home")
        );
    }
    return (
        <section className="bg-gradient-to-r from-violet-800 to-fuchsia-500 w-full  py-10 ">
            <div className="bg-white lg:w-1/2 mx-auto lg:px-14 px-2 lg:py-20 py-5 lg:space-y-14 space-y-5 text-[#747474] lg:rounded-[94px] rounded-lg  ">
                <div className="  ">
                    <h1 className="text-center lg:text-4xl text-xl lg:font-extrabold font-semibold font-ramabhadra text-[#212121]">CREATE ACCOUNT</h1>
                </div>

                {/* Authentication */}
                {handleError}
                <div className="grid lg:grid-cols-2 gap-5">
                    {/* Google */}
                    <div className="border border-[#BCBCBC] rounded-3xl flex  px-5 py-3 items-center" onClick={() => signInWithGoogle()}>
                        <div > <img className="" src={google} alt="" /></div>
                        <p className="flex-1 text-center">Sign up with Google</p>
                    </div>
                    {/* Facebook */}
                    <div className="border border-[#BCBCBC]  rounded-3xl flex  px-5 py-4">
                        <div >  <img className="" src={facebook} alt="" /></div>
                        <p className="flex-1 text-center ">Sign up with Facebook</p>
                    </div>
                </div>
                {/* OR */}
                <div className="flex items-center gap-3 w-1/4 mx-auto">
                    <div className="border border-bottom  w-full"></div>
                    <div><h1>OR</h1></div>
                    <div className="border border-bottom w-full "></div>
                </div>

                <div className="space-y-8">
                    <input className=" border-b-2 w-full outline-none" type="text" placeholder="Full Name" />
                    <input className=" border-b-2 w-full  outline-none" type="email" name="email" id="" placeholder="Email Address" />
                    <input className=" border-b-2 w-full  outline-none" type="password" name="password" id="" placeholder="Password" />
                </div>
                <div className="px-14 space-y-5">
                    <button className="bg-[#04083A] py-3 w-full rounded-2xl text-white font-medium ">Create Account</button>
                    <p className="text-center">Already have an account? <Link className="text-purple-600 underline" to="/login">Log in</Link></p>
                </div>

            </div>

        </section >
    );
};

export default Register;