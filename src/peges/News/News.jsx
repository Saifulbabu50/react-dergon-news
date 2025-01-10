import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LaftSideNav from "../Shared/leftsideNav/LaftSideNav";
import Navbar from "../Shared/Navber/Navbar";


const News = () => {
    const { id }=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h3 className="text-3xl">Dragon News</h3>
                    <p>{id}</p>

                </div>
                <div>
                    <LaftSideNav></LaftSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;