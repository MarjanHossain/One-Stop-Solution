import footer from "../../../assets/image/slide3 1.png"
const Footer = () => {
    return (
        <section className="bg-[#FBFAF8] mb-10">
            <div className="flex items-center">

                <div className="flex-1 lg:px-26 px-2 space-y-6 lg:space-y-0  ">
                    {/* Header */}
                    <div className="lg:space-y-6 space-y-3 pt-2 lg:pt-0 ">
                        <h1 className="text-[#4D4D4D] text-2xl font-extrabold  lg:text-6xl lg:font-extrabold ">Sign Up for our Newsletter</h1>
                        <p className="lg:text-3xl  font-medium">Stay updated with the latest news and offers from <br className="lg:block hidden" />
                            BillCare.</p>
                    </div>

                    {/* Login */}
                    <div className="lg:flex lg:pt-14 space-y-2 lg:space-y-0 ">
                        <div className="lg:w-1/2 w-full items-center">
                            <input type="email" name="email" id="" placeholder="Your Email Address" className="w-full  lg:px-3 px-2 lg:py-4 py-2  rounded-lg text-xl lg:text-3xl outline-none  " />
                        </div>
                        <div className="px-10 items-center ">
                            <button className="bg-[#4D4D4D] lg:px-10 lg:py-4 lg:border-4  border-2 px-8 py-2 border-white shadow-lg shadow-gray-800 rounded-lg text-white lg:text-3xl ">SignUp</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={footer} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Footer;