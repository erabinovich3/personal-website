import { Metadata } from "next";
import Image from "next/image";
import vectorErica from "@/assets/erica-vector-background.svg";

export const metadata: Metadata = {
    title: "Home",
};

export default async function Home() {
    return (
        <div>
            <div
                className="hero min-h-[50vh] bg-secondary"
                style={{
                    backgroundImage: `url('/sergey-shmidt-koy6FlCCy5s-unsplash.jpg')`,
                }}
            >
                <div className="hero-content grid grid-cols-1 sm:grid-cols-2 min-w-[235px]">
                    <div className="font-extrabold text-center">
                        <h1 className="text-2xl  after:block after:m-auto after:border-b-2 after:border-neutral after:w-[70%]">
                            Hi, I&apos;m Erica.
                        </h1>
                        <h2 className="text-xl">
                            Full Stack Software Engineer
                        </h2>
                    </div>
                    <Image
                        src={vectorErica}
                        alt="Simplified vector drawing of Erica"
                    />
                </div>
            </div>

            <div className="text-center py-7 px-7 lg:py-12 lg:px-14 font-medium min-h-[40vh]">
                <p>
                    I am interested in developing software that helps people,
                    whether in a large or small way.
                </p>
                <p className="mt-2">I want to make a difference.</p>
                <div className="divider divider-neutral" />
                <q className="font-bold text-lg">
                    Be somebody who makes everybody feel like a somebody.
                </q>
            </div>
        </div>
    );
}
