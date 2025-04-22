import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    {/* Tab Buttons */}
                    <TabList className="tab__list">
                        {WorkExperience.map((experience) => {
                            const isEducation = experience.type === "education";
                            return (
                                <Tab className="tab" key={`tab-${experience.id}`}>
                                    <Button>
                                        {isEducation ? "EDUCATION" : experience.company}
                                    </Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {/* Tab Content Panels */}
                    {WorkExperience.map(({ id, title, company, yearsActive, information, type }) => (
                        <TabPanel className="tab__panel" key={`panel-${id}`}>
                            <h2 className="tab__panel-title">
                                {title} @ {company}
                            </h2>
                            <p className="tab__panel-subtitle">{yearsActive}</p>
                            <ul className="tab__panel-list">
                                {information.map((info, index) => (
                                    <li key={`info-${index}`}>{info}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
