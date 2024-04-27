import React from "react";

interface WorkExpBlockProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    dates: string;
    className?: string;
}

const WorkExpBlock = ({
    title,
    subtitle,
    dates,
    children,
    className,
}: WorkExpBlockProps) => {
    return (
        <div>
            <h3 className="font-bold text-xl">{title}</h3>
            <h4 className="font-bold text-lg -mt-1">{subtitle}</h4>
            <h4 className="font-semibold -mt-1 mb-2">{dates}</h4>
            <div className={`text-neutral ${className}`}>{children}</div>
        </div>
    );
};

export default WorkExpBlock;
