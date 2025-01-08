import Header from "../Shared/Header/Header";
import LaftSideNav from "../Shared/leftsideNav/LaftSideNav";
import Navbar from "../Shared/Navber/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
                <div className="mb:col-span-2 border">
                    <h3 className="text-3xl">News coming soon...</h3>
                </div>
                <div className="border">
                    <LaftSideNav></LaftSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;