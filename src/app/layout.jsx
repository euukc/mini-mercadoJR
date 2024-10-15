import { Manrope } from "next/font/google";
import "./globals.scss";

const manrope = Manrope({ subsets: ["latin"]});

export const metadata = {
  title: "Portfólio de Produtos",
  description: "Mini Mercado JR",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">       
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
