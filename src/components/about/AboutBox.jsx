import React from 'react';
import { RiFireLine, RiCodeSSlashLine, RiDatabaseLine, RiAlarmWarningLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />
                <div>
                    <h3 className="about__title">3+</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>

            <div className="about__box">
                <RiCodeSSlashLine className='about__icon' />
                <div>
                    <h3 className="about__title">5+</h3>
                    <span className="about__subtitle">GitHub Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiDatabaseLine className='about__icon' />
                <div>
                    <h3 className="about__title">10+</h3>
                    <span className="about__subtitle">ETL Pipelines Deployed</span>
                </div>
            </div>

            <div className="about__box">
                <RiAlarmWarningLine className='about__icon' />
                <div>
                    <h3 className="about__title">99.9%</h3>
                    <span className="about__subtitle">Pipeline SLA Uptime</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;
