import React from "react";

interface WorkExpBlockProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
}

const WorkExpBlock = ({
    title,
    subtitle,
    children,
    className,
}: WorkExpBlockProps) => {
    return (
        <div>
            <h3 className="font-bold text-xl">{title}</h3>
            <h4 className="font-bold text-lg -mt-1 mb-2">{subtitle}</h4>
            <div className={`text-neutral ${className}`}>{children}</div>
        </div>
    );
};

export default WorkExpBlock;
