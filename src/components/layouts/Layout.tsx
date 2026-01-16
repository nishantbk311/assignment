import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col">
      <Navbar />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
