import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Suzume Dev",
    description: "This is the description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="jp">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;900&family=Noto+Sans:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body className={inter.className}>
                <ThemeProvider>
                    <div className="container">
                        <Navbar />
                        <div>{children}</div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
