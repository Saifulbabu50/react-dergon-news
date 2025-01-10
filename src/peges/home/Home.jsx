import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LaftSideNav from "../Shared/leftsideNav/LaftSideNav";
import Navbar from "../Shared/Navber/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BarekingNews from "./BarekingNews/BarekingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BarekingNews></BarekingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <RightSideNav></RightSideNav>
                </div>
                <div className="md:col-span-2 ">
                    <h3 className="text-3xl">Dragon News Home...</h3>
                    {
                        news.map(aNews=><NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div >
                    <LaftSideNav></LaftSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;