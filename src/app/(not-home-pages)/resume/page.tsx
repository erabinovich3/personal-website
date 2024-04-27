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
                full stack development and proficiency with cloud technologies.
                Proven record of collaborating effectively in fast-paced Agile
                cross-team environments. Passionate about leveraging technology
                to make a positive impact on people&apos;s lives, whether on a
                large or small scale. Eager to continue learning and develop
                software solutions that drive meaningful change.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-14">
                <div className="flex flex-col gap-7">
                    <ResumeSection
                        title="Technical Experience"
                        className="prose prose-li:m-0 prose-li:-mx-1"
                    >
                        <ul>
                            <li>
                                Demonstrated exceptional teamwork skills while
                                working seamlessly within 4 international and
                                cross-functional teams, effectively navigating
                                diverse cultural and professional backgrounds
                            </li>
                            <li>
                                Excellent written and verbal communication
                                skills
                            </li>
                            <li>
                                Experience in both building and consuming REST
                                APIs, as well as proficient in handling SOAP
                                APIs
                            </li>
                            <li>
                                Successfully implemented 3rd-party API
                                integrations, ensuring seamless connectivity and
                                functionality across systems
                            </li>
                            <li>
                                Enthusiastic about ongoing learning and
                                development, constantly seeking opportunities to
                                expand knowledge
                            </li>
                            <li>Familiar with CI/CD practices</li>
                            <li>Experienced in Agile/Scrum methodologies</li>
                        </ul>
                    </ResumeSection>
                    <ResumeSection title="Skills & Proficiencies">
                        <ResumeBlock title="Programming Languages">
                            Java, JavaScript, TypeScript, Node.js, HTML, CSS,
                            Shell scripting, Python, SQL
                        </ResumeBlock>
                        <ResumeBlock title="Cloud">
                            Google Cloud Platform (GCP), Kubernetes, Helm,
                            Minikube, Google Cloud Dataflow
                        </ResumeBlock>
                        <ResumeBlock title="Frameworks">
                            Java Spring Boot, Java Spring Webflux, React,
                            Next.js, Express, Apache Kafka, Jest Testing
                            Framework, Cucumber Testing Framework, JMeter
                        </ResumeBlock>
                        <ResumeBlock title="Build Tools">
                            Maven, Docker, Jenkins
                        </ResumeBlock>
                        <ResumeBlock title="Version Control">
                            Git, GitHub, Artifactory
                        </ResumeBlock>
                        <ResumeBlock title="Operating Systems">
                            Windows, Linux
                        </ResumeBlock>
                        <ResumeBlock title="Security">
                            SonarQube, AquaSec, WhiteSource (MEND), Wireshark
                        </ResumeBlock>
                    </ResumeSection>
                </div>
                <div className="flex flex-col gap-7">
                    <ResumeSection title="Work Experience">
                        <WorkExpBlock
                            title="Software Engineer"
                            subtitle="NCR Corporation"
                            dates="July 2019 - February 2024"
                            className="prose prose-li:m-0"
                        >
                            <ul>
                                <li>
                                    Contributed to the development of at least 5
                                    diverse components within a Microservices
                                    architecture
                                </li>
                                <li>
                                    Spearheaded the design and implementation of
                                    3 teller-consumer collaboration SDK
                                    components, enabling abstracted
                                    communication between frontend applications
                                    and backend systems
                                </li>
                                <li>
                                    Proactively tracked and addressed
                                    application security (AppSec) issues,
                                    resulting in a 75% decrease in security
                                    vulnerabilities
                                </li>
                                <li>
                                    Provided guidance and mentorship to 4 junior
                                    software engineers, fostering their
                                    professional growth and development
                                </li>
                            </ul>
                        </WorkExpBlock>
                    </ResumeSection>
                    <ResumeSection title="Certifications">
                        <ResumeBlock title="Google Cybersecurity Certificate">
                            <p className="-mt-1">Coursera</p>
                            <p className="-mt-1">March 2024</p>
                        </ResumeBlock>
                    </ResumeSection>
                    <ResumeSection title="Education">
                        <ResumeBlock title="Bachelor of Computer Science">
                            <p className="-mt-1">
                                Georgia Institute of Technology
                            </p>
                            <p className="-mt-1">Atlanta, Georgia, USA</p>
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
