import "./globals.css";
import SubmitForm from "./components/uicomponents/SubmitForm";
import RatingPopUp from "./helpers/RatingPopUp";
import ReviewPopUp from "./helpers/ReviewPopUp";
import WarningPopUp from "./helpers/WarningPopUp";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import SideMenu from "./layout/side/SideMenu";
import AddModal from "./pages/home/additemsection/buttons/AddModal";
import EditReviewForm from "./pages/userreviews/myreviews/EditReviewForm";
import { StoreProvider } from "./store/StoreProvider";

export const metadata = {
  title: "DJDB - Electronic World",
  description:
    "DJDB is an informational web page that provides all crucial details about electronic world, artists, various festivals and etc.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="text-white overflow-x-hidden flex-center relative ">
          <main className="w-full max-w-[1600px]">
            <Header />
            {children}
            <WarningPopUp />
            <RatingPopUp />
            <ReviewPopUp />
            <EditReviewForm />
            <AddModal />
            <SideMenu />
            <SubmitForm />
            <Footer />
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
