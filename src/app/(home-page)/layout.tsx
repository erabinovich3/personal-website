import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Erica Rabinovich",
        default: "Erica Rabinovich",
    },
    description: "Erica Rabinovich's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Navbar />
                <main className="min-h-[70vh]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
