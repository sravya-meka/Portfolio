const WorkExperience = [
    {
        id: 1,
        title: "Data Engineer",
        company: "ExcelSoft",
        yearsActive: "Nov 2024 – Present",
        information: [
            "Built an end-to-end data pipeline using Airflow, Python, and S3 for retail sales analytics, leveraging AWS and Snowflake,in close partnership with analysts and BI teams, resulting in a 10% reduction in reporting latency and improved data accessibility.",
            "Performed ingestion and data transformations on retail sales and customer data using AWS Glue and PySpark, developing fact and dimension database models in Snowflake to support analytics use cases and improve pipeline efficiency by 15%.",
            "Developed automated workflows to apply data quality checks on sales datasets, ensuring data integrity using procedures and triggers, enabling accurate stock forecasting, helped to reduce overstock costs by 8% quarter-over-quarter."
        ]
    },
    {
        id: 2,
        title: "Data Engineer",
        company: "NTTData",
        yearsActive: "Aug 2020 – Jul 2022",
        information: [
            "Architected a data lakehouse using Delta Lake on Azure to consolidate historical and streaming data, enabling unified access to raw and curated datasets, which reduced data duplication and lowered storage costs by 12%.",
            "Implemented data processing scripts using Python and SQL to transform and validate policies and claims data, integrating with Azure data marts to streamline reporting workflows and cut data preparation time by 14%.",
            "Configured data governance and data security rules using dbt on Azure Databricks, centralizing model access and maintaining consistency financial KPI definitions across finance teams."

        ]
    },
    {
        id: 3,
        title: "Data Engineer",
        company: "NTTData",
        yearsActive: "Aug 2019 – Jul 2020",
        information: [
            "Orchestrated ETL data pipelines using APIs, flat files, and streaming banking data to support both real-time and batch workflows, which improved loan processing efficiency, met service level agreements, and shortened reporting delays by 20%.",
            "Optimized slow-running Spark SQL queries by collaborating with the data team to clean up logic and reduce complexity, which enhanced query performance by 12% and improved the consistency of daily banking reports.",
            "Designed interactive dashboards in Power BI to monitor credit risk indicators and transaction anomalies in real time, improving data visibility for fraud, compliance, and operations teams across banking units"
            
        ]
    },
    {
        id: 4,
        title: "M.S. in Computer Science",
        company: "Campbellsville University, KY",
        yearsActive: "Aug 2022 – May 2024",
        type: "education",
        information: [
            "Focused on data engineering, big data, and cloud platforms.",
            "Completed projects using Spark, cloud services, Python, and Power BI."
        ]
    }
];

export default WorkExperience;
