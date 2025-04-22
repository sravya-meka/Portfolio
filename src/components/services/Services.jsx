import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'; // ETL - Data Pipeline
import Image2 from '../../assets/service-2.svg'; // Cloud
import Image3 from '../../assets/service-3.svg'; // Real-time
import Image4 from '../../assets/service-4.svg'; // Dashboard

const data = [
    {
        id: 1,
        image: Image1,
        title: "Data Pipeline Development",
        description:
            "Build scalable ETL pipelines using PySpark, Airflow, and Glue to transform raw data into analytics-ready datasets.",
    },
    {
        id: 2,
        image: Image2,
        title: "Cloud Data Engineering",
        description:
            "Architect cloud-native data platforms using AWS, Redshift, S3, and Synapse for secure, scalable infrastructure.",
    },
    {
        id: 3,
        image: Image3,
        title: "Real-Time Data Streaming",
        description:
            "Implement streaming pipelines with Kafka and Spark for high-throughput transactional data processing.",
    },
    {
        id: 4,
        image: Image4,
        title: "Dashboard & Reporting",
        description:
            "Deliver insights using Power BI and Tableau dashboards to support faster decision-making across teams.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div className="services__card" key={id}>
                        <img src={image} alt={title} className="services__img" />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
