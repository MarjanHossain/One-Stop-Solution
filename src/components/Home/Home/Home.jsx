import About from "../About/About";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import CopyRight from "../CopyRight/CopyRight";
import Footer from "../Footer/Footer";
import MemberShip from "../MemberShip/MemberShip";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <About />
            <Benefits />
            <MemberShip />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Home;