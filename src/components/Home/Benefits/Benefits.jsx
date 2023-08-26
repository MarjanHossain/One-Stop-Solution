import benefits from "../../../assets/image/benefits.png"
const Benefits = () => {
    return (
        <section className="lg:flex justify-between  font-inter  lg:pt-0">
            <div className=" bg-white flex-1 flex justify-center pt-20">
                <div className="space-y-10">
                    <div className=" lg:space-y-3 space-y-2">
                        <h1 className="text-[#4D4D4D] font-bold lg:text-5xl text-3xl  ">Free Medical Consultations</h1>
                        <p className="font-medium lg:text-3xl text-lg">
                            Sign up today and get free medical consultancy for 15 <br className="hidden lg:block" />
                            minutes within the first 3 days.
                        </p>
                    </div>
                    <div className=" lg:space-y-3 space-y-2">
                        <h1 className="text-[#4D4D4D] font-bold lg:text-5xl text-3xl">
                            Pro Membership Benefits
                        </h1>
                        <p className="font-medium lg:text-3xl text-lg">
                            Get exclusive features and benefits as a Pro member, <br className="hidden lg:block" />
                            including access to premium customer support.

                        </p>
                    </div>
                </div>
            </div>
            <div className="" ><img src={benefits} alt="" /></div>




        </section >
    );
};

export default Benefits;