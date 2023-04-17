import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const nfont = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nfont.className}>
        <ToasterProvider />
        <RegisterModal />
        {/* <Modal isOpen title="Login" actionlabel="Submit" /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
