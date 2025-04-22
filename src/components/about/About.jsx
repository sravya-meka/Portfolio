import React from 'react';
import './About.css';
import Image from '../../assets/avatar-1.svg';
import Resume from '../../assets/Sravya_Resume_DEFT.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Sravya's Avatar" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi! I’m <strong>Sravya Sri Meka</strong>, a Data Engineer based in Irving, TX with 3+ years of experience designing scalable data pipelines and cloud-native solutions. 
                            <br /><br />
                            I specialize in transforming raw datasets into production-ready insights using tools like <strong>AWS Glue, PySpark, Redshift, Apache Airflow, and Databricks</strong>. 
                            My focus is on automating workflows, building secure data lakes, and enabling fast analytics for business teams.
                            <br /><br />
                            I’m passionate about data quality, real-time streaming, and building robust ETL pipelines that empower stakeholders to make data-driven decisions.
                        </p>

                        <ul className="about__list">
                            <li>Python (PySpark, Pandas)</li>
                            <li>AWS (Glue, S3, Redshift, IAM)</li>
                            <li>Databricks & Apache Airflow</li>
                            <li>Snowflake & Azure Synapse</li>
                            <li>PostgreSQL | Oracle | MongoDB</li>
                            <li>Power BI | Tableau</li>
                        </ul>

                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
