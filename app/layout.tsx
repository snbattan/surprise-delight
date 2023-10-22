import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
import Arch from '../components/arch.jsx';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Surprise & Delight!',
  description: 'Made by Sierra Battan',
};

type Page = { title: string; path: string };
const pages: Page[] = [
  { title: 'Who', path: '/who' },
  { title: 'What', path: '/what' },
  { title: 'When', path: '/when' },
  { title: 'Where', path: '/where' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen flex-col place-items-center bg-pink-200 px-8 text-center text-pink-900 dark:bg-pink-950 dark:text-pink-100 lg:px-16">
        <header className="flex flex-col place-items-center py-12">
          <Link
            href="/"
            className="text-3xl hover:text-pink-500 dark:hover:text-pink-400"
          >
            Welcome!
          </Link>
          <nav className="flex flex-col place-items-center gap-4 pt-4 sm:flex-row">
            {pages.map(({ title, path }) => (
              <Link
                key={path}
                href={path}
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>
        <Arch>
          <main className="flex grow flex-col items-center gap-2">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <footer className="flex justify-center pb-4 pt-24">
            <a
              className="text-xs hover:text-pink-500 dark:hover:text-pink-400"
              href="https://sierraismy.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by Sierra
            </a>
          </footer>
        </Arch>
      </body>
    </html>
  );
}
