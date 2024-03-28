import ResumeSection from "@/components/resume/ResumeSection";
import ResumeBlock from "@/components/resume/ResumeBlock";
import WorkExpBlock from "@/components/resume/WorkExpBlock";
import { Metadata } from "next";
import React from "react";
import { HiDownload } from "react-icons/hi";

export const metadata: Metadata = {
    title: "Resume",
};

const ResumePage = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between items-center sm:items-end mb-5">
                <h1 className="text-3xl font-bold text-center">
                    Erica Rabinovich
                </h1>
                <a href="/Resume-2024.pdf" download>
                    <button className="btn btn-primary xs:h-10 xs:min-h-10 min-w-[150px]">
                        Download as PDF
                        <HiDownload className="text-xl hidden xs:block" />
                    </button>
                </a>
            </div>
            <p className="mb-7 font-medium">
                Diligent software engineer with about 5 years of experience in
                full stack development. Proficient in cloud development and
                eager to learn new things. Experience collaborating in a fast
                moving Agile cross-team environment. I am interested in
                developing software that helps people, whether in a large or
                small way. I want to make a difference.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-14">
                <div className="flex flex-col gap-7">
                    <ResumeSection
                        title="Technical Experience"
                        className="prose prose-li:m-0 prose-li:-mx-1"
                    >
                        <ul>
                            <li>
                                Strong team player, driven, excellent written
                                and verbal communication skills
                            </li>
                            <li>
                                Experience both building and consuming REST
                                APIs, and experience consuming SOAP APIs
                            </li>
                            <li>
                                Experience building 3rd-party API integrations
                            </li>
                            <li>Experience with Cassandra database</li>
                            <li>Always ready to learn</li>
                            <li>Familiar with CI/CD practices</li>
                            <li>
                                Familiar with Agile/Scrum Software Development
                            </li>
                        </ul>
                    </ResumeSection>
                    <ResumeSection title="Skills & Proficiencies">
                        <ResumeBlock title="Programming Languages">
                            TypeScript, JavaScript, Java, Node.js, HTML, CSS,
                            Shell scripting, Python, SQL
                        </ResumeBlock>
                        <ResumeBlock title="Cloud">
                            Google Cloud Platform (GCP), Kubernetes, Minikube,
                            Helm, Google Cloud Dataflow
                        </ResumeBlock>
                        <ResumeBlock title="Frameworks">
                            NextJS, React, Spring Boot, Spring Webflux, Express,
                            Apache Kafka, Jest Testing Framework, Cucumber
                            Testing Framework, JMeter
                        </ResumeBlock>
                        <ResumeBlock title="Build Tools">
                            Maven, Docker, Jenkins
                        </ResumeBlock>
                        <ResumeBlock title="Version Control">
                            Git, GitHub, Artifactory
                        </ResumeBlock>
                        <ResumeBlock title="Operating System">
                            Windows, Linux
                        </ResumeBlock>
                        <ResumeBlock title="Security">
                            Sonar, AquaSec, WhiteSource (MEND), Wireshark
                        </ResumeBlock>
                    </ResumeSection>
                </div>
                <div className="flex flex-col gap-7">
                    <ResumeSection title="Work Experience">
                        <WorkExpBlock
                            title="Software Engineer"
                            subtitle="NCR Corporation July 2019 - February 2024"
                            className="prose prose-li:m-0"
                        >
                            <ul>
                                <li>
                                    Worked on various components of a
                                    Microservices architecture
                                </li>
                                <li>
                                    Designed and implemented teller-consumer
                                    collaboration SDK components
                                </li>
                                <li>Tracked and addressed AppSec issues</li>
                                <li>Mentored Junior Software Engineers</li>
                            </ul>
                        </WorkExpBlock>
                    </ResumeSection>
                    <ResumeSection title="Education" className="gap-4">
                        <ResumeBlock title="Google Cybersecurity Certificate">
                            <h4 className="-mt-1">March 2024</h4>
                        </ResumeBlock>
                        <ResumeBlock title="Bachelor of Computer Science">
                            <p className="-mt-1">
                                Georgia Institute of Technology
                            </p>
                            <p className="-mt-1">Atlanta, Georgia</p>
                            <p className="-mt-1">2015 - 2019</p>
                            <p className="-mt-1">
                                Graduated with Highest Honors
                            </p>
                        </ResumeBlock>
                    </ResumeSection>
                    <ResumeSection title="Languages">
                        <ul>
                            <li>American English (Native)</li>
                            <li>Russian (Elementary Proficiency)</li>
                            <li>Spanish (Elementary Proficiency)</li>
                        </ul>
                    </ResumeSection>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
