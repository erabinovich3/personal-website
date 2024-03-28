import React from "react";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const ResumeSection = ({ title, children, className }: ResumeSectionProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold border-b-2 border-neutral mb-4">
                {title}
            </h2>
            <div className={`flex flex-col gap-3 text-neutral ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default ResumeSection;
