import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BarekingNews = () => {
    return (
        <div className='flex border bg-slate-100'>
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
                <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
                <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
                <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BarekingNews;