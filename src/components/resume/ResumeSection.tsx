import React from "react";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold border-b-2 border-neutral mb-4">
                {title}
            </h2>
            <div className="flex flex-col gap-2 prose prose-li:m-0 prose-li:-mx-1 text-neutral">
                {children}
            </div>
        </div>
    );
};

export default ResumeSection;
