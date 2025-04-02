import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter=Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:shadesOfPurple,
    }}>

    <html lang="en">
          <body
            className={`inter.classname`}
          >
          
          <ThemeProvider attribute="class" defaultTheme="dark">
            
            {/* header */}

            <Header></Header>
            <main className="min-h-screen">
            {children}
            </main>
            
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with love by ❤️ Pranav VS Ikhar</p>
              </div>
            </footer>

            
            </ThemeProvider>
          </body>
        </html>


    </ClerkProvider>
  );
}
