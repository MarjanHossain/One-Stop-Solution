import { Link } from "react-router-dom";
import banner from "../../../assets/image/banner.png"
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai"


const Banner = () => {
    const handleMenu =
        <>
            <li><Link>Features</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
        </>
    const [toggle, setToggle] = useState(false)
    return (
        <section className=" relative"   >
            <div >
                <div> <img src={banner} alt="" /></div>

                {/* Desktop Navbar */}
                <div className="hidden lg:block absolute top-0" >
                    <ul className=" menu hover ">
                        {handleMenu}
                    </ul>
                </div>

                {/* Mobile  */}

                <div className={`absolute right-0 top-7 ${toggle ? "block" : "hidden"} `}>
                    <ul className="bg-white shadow-lg text-left  inline-block py-3 px-2 rounded-lg  ">
                        {handleMenu}
                    </ul>
                </div>

                <div onClick={() => setToggle(!toggle)} className="absolute right-1 top-1 text-2xl text-white lg:hidden">
                    {toggle ?
                        <span><AiOutlineClose /></span>
                        :
                        <span><AiOutlineMenuFold /></span>
                    }
                </div>

                {/* Button */}
                <div className="absolute  lg:right-6  lg:bottom-[104px] right-0 bottom-0 underline lg:no-underline ">
                    <Link to="/register" className="text-white lg:border-4  lg:border-white lg:px-4  lg:py-3 rounded-xl lg:text-3xl lg:bg-[#04083A] ">Sign up</Link>
                </div>


            </div>

        </section>
    );
};

export default Banner;