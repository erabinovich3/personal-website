import React from "react";

interface SkillBlockProps {
    children: React.ReactNode;
    title: string;
    className?: string;
}

const ResumeBlock = ({ title, children, className }: SkillBlockProps) => {
    return (
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <div className={className}>{children}</div>
        </div>
    );
};

export default ResumeBlock;
