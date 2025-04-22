import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';

const HeaderSocials = () => {
    return (
        <div className="home__socials-wrapper">
            <div className='home__socials'>
                <a href='mailto:sravya29.meka@gmail.com' className='home__social-link' title="Email">
                    <MdEmail />
                </a>

                <a href='tel:+14694933780' className='home__social-link' title="Phone">
                    <MdPhone />
                </a>

                <a href='https://www.linkedin.com/in/sravya-sri-meka-93953027b' className='home__social-link' target='_blank' rel='noreferrer' title="LinkedIn">
                    <FaLinkedinIn />
                </a>

                <a href='https://leetcode.com/u/5234264/' className='home__social-link' target='_blank' rel='noreferrer' title="LeetCode">
                    <SiLeetcode />
                </a>
            </div>
        </div>
    );
};

export default HeaderSocials;
