import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Surprise & Delight!',
  description: 'Made by Sierra Battan',
};

type Page = { title: string; path: string };
const pages: Page[] = [
  {
    title: 'Who',
    path: '/who',
  },
  {
    title: 'What',
    path: '/what',
  },
  {
    title: 'When',
    path: '/when',
  },
  {
    title: 'Where',
    path: '/where',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen flex-col place-items-center bg-stone-200 px-8 text-center text-amber-900 dark:bg-stone-800 dark:text-amber-100 lg:px-16">
        <header className="flex flex-col place-items-center py-12">
          <h1 className="text-3xl"></h1>
          <Link
            href="/"
            className="text-3xl hover:text-amber-700 dark:hover:text-amber-200"
          >
            Welcome!
          </Link>
          <nav className="flex flex-col place-items-center gap-4 pt-4 sm:flex-row">
            {pages.map(({ title, path }) => (
              <Link
                key={path}
                href={path}
                className="hover:text-amber-700 dark:hover:text-amber-200"
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>
        <main className="container flex grow flex-col place-items-center rounded-t-full bg-orange-100 pt-24 ring-2 ring-amber-900 dark:bg-orange-950 dark:ring-amber-200">
          <div className="flex grow flex-col items-center gap-2">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <footer className="flex justify-center pb-4 pt-24">
            <a
              className="text-xs hover:text-amber-700 dark:hover:text-amber-200"
              href="https://sierraismy.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by Sierra
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
