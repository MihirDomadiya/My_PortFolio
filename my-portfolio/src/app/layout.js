import "../../public/assets/css/globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Mihir's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />=
        <title>{metadata.title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
