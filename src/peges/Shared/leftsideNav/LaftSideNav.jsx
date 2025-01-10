import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Right1 from '../../../assets/swimming.png'
import Right2 from '../../../assets/class.png'
import Right3 from '../../../assets/playground.png'
import Right4 from '../../../assets/bg.png'

const LaftSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl">Login Wite</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google</button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Githob</button>
            </div>
            <div>
                <h2 className="text-3xl">Find Us On</h2>
                <button className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook</button>
                <button className="btn btn-outline w-full">
                    <FaTwitter></FaTwitter>
                    Twitter</button>
                <button className="btn btn-outline w-full">
                    <FaInstagram></FaInstagram>
                    Instagram</button>
            </div>
            <div className='pt-11 p-4'>
                <h3 className="text-3xl">Q-Zone</h3>
                <img src={Right1} alt="" />
                <img src={Right2} alt="" />
                <img src={Right3} alt="" />
                <img src={Right4} alt="" />
            </div>
        </div>
    );
};

export default LaftSideNav;