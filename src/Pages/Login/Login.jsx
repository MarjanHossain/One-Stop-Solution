import { Link } from "react-router-dom";
import facebook from "../../assets/image/facebook.png"
import google from "../../assets/image/google.png"

const Login = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-violet-800 to-fuchsia-500 w-full   py-10">
                <div className="bg-white lg:w-1/2 mx-auto lg:px-14 px-2 lg:py-14 py-5 lg:space-y-10 space-y-5 text-[#747474] lg:rounded-[94px] rounded-xl shadow-2xl  ">
                    <div className="  ">
                        <h1 className="text-center text-xl lg:text-4xl font-semibold lg:font-extrabold font-ramabhadra text-[#212121]">LOG IN</h1>
                    </div>

                    {/* Authentication */}

                    <div className="grid lg:grid-cols-2 gap-5">
                        <div className="border border-[#BCBCBC] rounded-3xl flex  px-5 py-3 items-center ">
                            <div > <img className="" src={google} alt="" /></div>
                            <p className="flex-1 text-center text-lg">Sign up with Google</p>
                        </div>
                        <div className="border border-[#BCBCBC]  rounded-3xl flex  px-5 py-4">
                            <div >  <img className="" src={facebook} alt="" /></div>
                            <p className="flex-1 text-center text-lg ">Sign up with Google</p>
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
                        <button className="bg-[#04083A] py-3 w-full rounded-2xl text-white font-medium">Create Account</button>
                        <p className="text-center">Dont't have an account? <Link className="text-purple-600 underline" to="/register">Sign up</Link></p>

                    </div>

                </div>

            </section >
        </div>
    );
};

export default Login;