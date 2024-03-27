import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <Navbar />
                <main className="py-7 px-7 lg:py-12 lg:px-14">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
