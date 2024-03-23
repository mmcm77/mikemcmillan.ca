import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Mike McMillan | Product Manager portfolio",
  description:
    "Experienced Product Manager with a track record in strategy, GTM, and product development. Skilled in Agile, data-driven decision making, and cross-functional leadership.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto px-12 max-w-4xl">
        <Nav />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
