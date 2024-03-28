import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import selfImg from "@/assets/erica.jpg";

export const metadata: Metadata = {
    title: "About",
};

const AboutPage = () => {
    return (
        <div className="card card-body bg-base-100 flex flex-col lg:flex-row gap-3 lg:gap-10 w-full justify-center items-center shadow-md">
            <div>
                <Image
                    src={selfImg}
                    alt="Picture of Erica"
                    width={150}
                    height={150}
                    className="m-auto mb-5 rounded-full border-8 border-neutral flex-auto w-[150px]"
                />
            </div>
            <div className="flex flex-col text-center gap-5 max-w-2xl font-medium">
                <p>
                    I&apos;m Erica Rabinovich, a full stack software engineer
                    based in Atlanta, Georgia.
                </p>
                <p>
                    I graduated from Georgia Tech with a BS in Computer Science
                    in 2019 where I focused on info internetworks and media.
                    I&apos;m interested in working on projects that improve
                    people&apos;s lives. I love to learn new things and hope
                    that my future endeavors will provide that opportunity.
                </p>
                <p>
                    In my free time, I like to read, crochet, and spend time
                    with my family.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
