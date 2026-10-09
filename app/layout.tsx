import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CityCare Multispeciality Hospital — Trusted Care in Aligarh",
  description:
    "Multispeciality hospital in Aligarh with 24×7 emergency, experienced specialists, and online appointment booking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0E1A] text-white`}>
        {/* EMERGENCY TOP BAR */}
        <div className="border-b border-[#252D45] bg-[#151B2E]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#A78BFA]">●</span>
              <span className="font-medium text-white">24×7 Emergency</span>
              <span className="hidden text-[#8892B0] sm:inline">·</span>
              <span className="hidden font-mono text-[#8892B0] sm:inline">
                Ambulance +91 98370 12345
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden font-mono text-[#8892B0] md:inline">
                Reception 0571 240 1234
              </span>
              <a
                href="#book"
                className="rounded-full bg-gradient-to-r from-[#5B6EF5] to-[#6B7FFF] px-4 py-1 font-semibold text-white transition hover:from-[#6B7FFF] hover:to-[#8B9FFF]"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <nav className="sticky top-0 z-50 border-b border-[#252D45] bg-[#0A0E1A]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B6EF5] to-[#A78BFA] font-bold text-white">
                +
              </div>
              <div className="leading-none">
                <p className="text-lg font-bold tracking-tight text-white">
                  CITYCARE
                </p>
                <p className="text-[10px] tracking-widest text-[#8892B0]">
                  MULTISPECIALITY
                </p>
              </div>
            </Link>
            <div className="hidden gap-8 text-sm md:flex">
              <a href="#departments" className="text-[#8892B0] transition hover:text-white">
                Departments
              </a>
              <a href="#doctors" className="text-[#8892B0] transition hover:text-white">
                Doctors
              </a>
              <a href="#tools" className="text-[#8892B0] transition hover:text-white">
                Health Tools
              </a>
              <a href="#book" className="text-[#8892B0] transition hover:text-white">
                Contact
              </a>
            </div>
            <a
              href="#book"
              className="rounded-full bg-gradient-to-r from-[#5B6EF5] to-[#6B7FFF] px-5 py-2 text-sm font-semibold text-white transition hover:from-[#6B7FFF] hover:to-[#8B9FFF]"
            >
              BOOK NOW
            </a>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="mt-24 border-t border-[#252D45] bg-[#151B2E] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B6EF5] to-[#A78BFA] text-sm font-bold text-white">
                    +
                  </div>
                  <p className="font-bold tracking-tight text-white">
                    CITYCARE
                  </p>
                </div>
                <p className="text-sm text-[#8892B0]">
                  Multispeciality Hospital
                  <br />
                  Civil Lines, Aligarh, UP 202001
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
                  CONTACT
                </p>
                <p className="text-sm text-[#8892B0]">
                  Emergency: +91 98370 12345
                  <br />
                  Reception: 0571 240 1234
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
                  HOURS
                </p>
                <p className="text-sm text-[#8892B0]">
                  Emergency: 24×7
                  <br />
                  OPD: Mon–Sat, 9am–8pm
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#252D45] pt-6 md:flex-row">
              <p className="text-xs text-[#8892B0]">
                © 2026 CityCare Multispeciality Hospital
              </p>
              <p className="font-mono text-xs text-[#8892B0]">
                Demo built by{" "}
                <a
                  href="https://forge-sage-six.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A78BFA] transition hover:underline"
                >
                  FORGE
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}