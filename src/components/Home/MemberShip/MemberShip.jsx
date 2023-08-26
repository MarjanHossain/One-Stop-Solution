import memberShip from "../../../assets/image/memberShip.png"
const MemberShip = () => {
    return (
        <section className=" font-inter bg-[#04083A]  mr-5 lg:mr-0 ">
            {/* MemberShip Pricing */}
            <div className="lg:flex lg:items-center  ">
                <div><img src={memberShip} alt="" /></div>
                <div className="flex-1 text-center  lg:py-7 text-white">
                    {/* Header */}
                    <div className="lg:space-y-4 space-y-2 py-2 lg:py-0">
                        <h1 className=" lg:text-6xl text-3xl  lg:font-extrabold font-bold">Pro Membership Pricing</h1>
                        <p className="lg:text-3xl text-lg">
                            Upgrade to  Pro membership and <br className="block lg:hidden" /> enjoy  all the exclusive <br className="hidden lg:block" />
                            features.
                        </p>
                    </div>
                    <div className="lg:pt-16 pt-6 lg:space-x-20 space-x-8">
                        {/* Yearly */}
                        <div
                            className="bg-[#D6D7DB] text-[#04083A] lg:px-5 px-3 lg:py-10 py-5 inline-block lg:rounded-2xl rounded-lg lg:space-y-3 ">
                            <h1 className="lg:text-5xl text-2xl font-extrabold ">Yearly</h1>
                            <div className="lg:text-3xl text-xl">
                                <p>19,999</p>
                                <p>Naira</p>
                            </div>
                        </div>
                        {/* Monthly */}
                        <div
                            className="bg-[#D6D7DB] text-[#04083A] lg:px-5 px-3 lg:py-10 py-5 inline-block lg:rounded-2xl rounded-lg lg:space-y-3">
                            <h1 className="lg:text-5xl text-2xl font-extrabold ">Yearly</h1>
                            <div className="lg:text-3xl text-xl">
                                <p>19,999</p>
                                <p>Naira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card */}
        </section>
    );
};

export default MemberShip;