import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "µLearn CUCEK | Cochin University College of Engineering Kuttanad",
  description:
    "Official website of µLearn CUCEK — the campus chapter at Cochin University College of Engineering Kuttanad, CUSAT. Empowering student innovators through peer learning and micro groups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

