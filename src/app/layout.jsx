import { Rubik } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'react-phone-input-2/lib/style.css';

// const rubik = Rubik({
//   subsets: ['latin'],
//   variable: '--font-rubik',
//   weight: ['400', '500', '600', '700'], 
// })


export const metadata = {
  title: "Privyr CRM",
  description: "A Whatsapp CRM Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-50`}>
        <Navbar />
        <div style={{ margin: "auto"}}>
          {children}
        </div>
      </body>
    </html>
  );
}
