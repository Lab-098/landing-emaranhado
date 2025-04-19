import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/presentation/external/styled";
import { StyledProvider } from "@/presentation/external/styled/provider";

import localFont from "next/font/local";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mollieRocky = localFont({
  variable: "--font-mollie-rocky",
  src: "./fonts/mollie-rocky.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emaranhado Criativo",
  description: "Somos um Lab de Criatividade, Branding e Comunicação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <StyledProvider>
        <body className={`${kanit.variable} ${mollieRocky.variable}`}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </StyledProvider>
    </html>
  );
}
