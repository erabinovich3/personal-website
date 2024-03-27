import { Project } from "@/model/Project";
import Image from "next/image";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import placeholder from "@/assets/project-placeholder.png";

interface ProjectProps {
    project: Project;
}

const Project = ({ project }: ProjectProps) => {
    return (
        <div
            key={project.id}
            className="card grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow min-w-[200px]"
        >
            <figure className="p-3 sm:p-5">
                <Image
                    priority
                    src={project.image.src ?? placeholder}
                    alt={project.image.alt ?? "Project Placeholder Image"}
                    width={700}
                    height={400}
                    className="rounded-lg"
                />
            </figure>
            <div className="card-body pt-2 md:p-8">
                <div className="flex-1 items-center">
                    <h2 className="card-title">{project.name}</h2>
                    <p className="mb-5">{project.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-0 sm:gap-5 justify-center">
                        {project.details.links.map((link, i) => {
                            return (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary mb-3 flex flex-row flex-nowrap gap-2 w-full"
                                >
                                    <span>
                                        {link.type === "source" ? (
                                            <FaLaptopCode />
                                        ) : (
                                            <HiOutlineExternalLink />
                                        )}
                                    </span>
                                    <span className="text-base-200">
                                        {link.type === "source"
                                            ? "Source Code"
                                            : "See It Live"}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-4 flex flex-row gap-2 items-center justify-center w-full flex-wrap">
                    {project.details.tags.map((tag, i) => {
                        return (
                            <div
                                key={i}
                                className="p-3 badge badge-accent badage-lg font-bold"
                            >
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;
