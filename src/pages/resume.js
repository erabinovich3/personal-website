import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { HiDownload } from "react-icons/hi"

import "../assets/css/resume.css"
import "normalize.css"

function Resume({ data }) {
  return (
    <Layout>
      <Seo pageTitle="Resume" />
      <main className="main-resume">
        <div className="resume-title-group">
          <h1 className="resume-title">Erica Rabinovich</h1>
          <a href={data.allFile.nodes[0].publicURL} download>
            <button className="resume-download-btn">
              Download as PDF
              <HiDownload className="resume-download-icon" />
            </button>
          </a>
        </div>
        <p className="resume-intro">
          Diligent software engineer with about 3 years of experience in full
          stack development. Proficient in cloud development and eager to learn
          new things. Experience collaborating in a fast moving Agile cross-team
          environment. I am interested in developing software that helps people,
          whether in a large or small way. I want to make a difference.
        </p>

        <div className="resume-content">
          <div className="resume-block">
            <h2 className="resume-block-title">Technical Experience</h2>
            <ul>
              <li>
                Strong team player, driven, excellent written and verbal
                communication skills
              </li>{" "}
              <li>
                Experience both building and consuming REST APIs, and experience
                consuming SOAP APIs
              </li>
              <li>Experience building 3rd-party API integrations</li>
              <li>Experience with Cassandra database</li>
              <li>Always ready to learn</li>
              <li>Familiar with CI/CD practices</li>
              <li>Familiar with Agile/Scrum Software Development</li>
            </ul>
          </div>

          <div className="resume-block">
            <h2 className="resume-block-title">Work Experience</h2>
            <h3>Software Engineer</h3>
            <h4>NCR Corporation July 2019 - Present</h4>
            <ul>
              <li>
                Worked on various components of a Microservices architecture
              </li>
              <li>
                Designed and implemented teller-consumer collaboration SDK
                components
              </li>
              <li>Tracked and addressed AppSec issues</li>{" "}
              <li>Mentored Junior Software Engineers</li>
            </ul>
          </div>

          <div className="resume-block">
            <h2 className="resume-block-title">Skills & Proficiencies</h2>
            <h4 className="resume-block-subtitle">Programming Languages</h4>
            <p>
              TypeScript, JavaScript, Java, Node.js, HTML, CSS, Shell scripting,
              Python
            </p>
            <h4 className="resume-block-subtitle">Cloud</h4>
            <p>Google Cloud Platform (GCP), Kubernetes, Minikube, Helm</p>
            <h4 className="resume-block-subtitle">Frameworks</h4>
            <p>
              Apache Kafka, Jest Testing Framework, Cucumber Testing Framework,
              JMeter, Spring Boot, Spring Webflux
            </p>
            <h4 className="resume-block-subtitle">Build Tools</h4>
            <p>Maven, Docker, Jenkins, Harness.io</p>
            <h4 className="resume-block-subtitle">Version Control</h4>
            <p>Git, GitHub, Artifactory</p>
            <h4 className="resume-block-subtitle">Operating System</h4>
            <p>Windows</p>
            <h4 className="resume-block-subtitle">Security</h4>
            <p>Sonar, AquaSec, WhiteSource, Coverity</p>
          </div>

          <div className="grid-group">
            <div className="resume-block">
              <h2 className="resume-block-title">Education</h2>
              <h4 className="resume-block-subtitle">
                Bachelor of Computer Science
              </h4>
              <p>
                Georgia Institute of Technology
                <br />
                Atlanta, Georgia
                <br />
                2015 - 2019
                <br />
                Graduated with Highest Honors
              </p>
            </div>

            <div className="resume-block">
              <h2 className="resume-block-title">Languages</h2>
              <ul>
                <li>American English (Native)</li>
                <li>Russian (Elementary Proficiency)</li>
                <li>Spanish (Elementary Proficiency)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      nodes {
        publicURL
      }
    }
  }
`

export default Resume
