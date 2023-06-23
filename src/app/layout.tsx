import Header from "components/Global/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description:
    "Welcom to Post In. Create your community and enjoy your relations.",
};

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Header />
          {props.children}
          {props.modal}
        </div>
      </body>
    </html>
  );
}
