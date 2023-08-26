import { Link } from "react-router-dom";
import doctor from "../../../assets/image/doctor 1.png"
const About = () => {
    return (
        <div className="lg:flex">
            <div className="">
                <img src={doctor} alt="" />
            </div>
            <div className="flex items-center px-1 lg:px-3  ">
                <div className=" space-y-2 lg:space-y-5 ">
                    <h1 className="lg:text-5xl lg:font-bold text-3xl  font-semibold text-center lg:text-left">About Us</h1>
                    <p className="  text-black lg:text-2xl   lg:leading-normal lg:tracking-normal text-lg ">With BillCare, you can pay for airtime, internet data, electricity
                        <br className="hidden lg:block" />
                        bills, make flight ticket reser vations , and access free medical consultations.
                    </p>
                    <div className="text-right"><Link to="" className="text-emerald-900 text-right text-xl">Read More...</Link></div>
                </div>

            </div>
        </div>
    );
};

export default About;