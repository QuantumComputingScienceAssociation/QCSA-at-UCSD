"use client";
import MainWebsiteFooter from "../Components/mainWebsiteFooter";
import MainWebsiteHeader from "../Components/mainWebsiteHeader";
import NewsletterCard from "../Components/NewsletterCard";
import { motion } from 'framer-motion';

type Item = {
  edition: number | string;
  title: string;
  excerpt: string;
  href: string;
};

const newsletters: Item[] = [
    // TODO: Add UCSD QCSA newsletters once published
    // { edition: 1, title: "Week 1", excerpt: "...", href: "#" },
  ];

  

const COLS = 3;
const pad = (COLS - (newsletters.length % COLS)) % COLS;
export default function NewslettersPage() {
  return (
    <>
    <MainWebsiteHeader/>
    <main className="mx-auto px-6 py-12 w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl pb-44 ">
      <motion.h2 
        className="mb-16 text-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Past Newsletters
      </motion.h2>

      <ul className="grid gap-6 xl:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-6 items-stretch auto-rows-fr">
        {newsletters.map((n, index) => (
          <motion.li 
            key={n.edition} 
            className="h-full"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <NewsletterCard
              edition={n.edition}
              title={n.title}
              excerpt={n.excerpt}
              href={n.href}
            />
          </motion.li>
        ))}

        {Array.from({ length: pad }).map((_, i) => (
          <li
            key={`pad-${i}`}
            aria-hidden
            className="invisible md:block"
          >
            <div className="rounded-2xl px-8 py-10" />
          </li>
        ))}
      </ul>
    </main>
    <MainWebsiteFooter/>
    </>
  );
}