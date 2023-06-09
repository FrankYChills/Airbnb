import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from "./components/modals/LoginModal";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const nfont = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get current logged in user
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nfont.className}>
        <ToasterProvider />
        <SearchModal />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        {/* <Modal isOpen title="Login" actionlabel="Submit" /> */}
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
