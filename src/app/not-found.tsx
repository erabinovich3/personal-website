import React from "react";
import notFoundImg from "@/assets/error404.svg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
};

const NotFoundPage = () => {
    return (
        <div className="flex flex-col align-center m-auto text-center">
            <div className="mb-5 font-bold">
                <h1 className="text-2xl">404</h1>
                <h2 className="text-xl">Page Not Found</h2>
            </div>
            <Image
                priority
                src={notFoundImg}
                alt="404: Page Not Found"
                className="m-auto"
                width={700}
            />
        </div>
    );
};

export default NotFoundPage;
