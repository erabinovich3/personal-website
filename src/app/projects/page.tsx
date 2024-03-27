import Project from "@/components/Project";
import { getAllProjects } from "@/lib/contentfulApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
};

const ProjectsPage = async () => {
    const projects = await getAllProjects();
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project) => {
                return <Project project={project} key={project.id} />;
            })}
        </div>
    );
};

export default ProjectsPage;
