import React from "react";

interface SkillBlockProps {
    children: React.ReactNode;
    title: string;
}

const ResumeBlock = ({ title, children }: SkillBlockProps) => {
    return (
        <div>
            <h3 className="not-prose font-bold text-lg">{title}</h3>
            <div>{children}</div>
        </div>
    );
};

export default ResumeBlock;
