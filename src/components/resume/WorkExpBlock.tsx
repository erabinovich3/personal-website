import React from "react";

interface WorkExpBlockProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
}

const WorkExpBlock = ({ title, subtitle, children }: WorkExpBlockProps) => {
    return (
        <div>
            <h3 className="not-prose font-bold text-xl">{title}</h3>
            <h4 className="not-prose font-bold text-lg -mt-1 mb-2">
                {subtitle}
            </h4>
            <div className="prose prose-li:m-0 text-neutral">{children}</div>
        </div>
    );
};

export default WorkExpBlock;
