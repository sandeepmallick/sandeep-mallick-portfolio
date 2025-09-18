"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Sandeep AKA बपुनि
        
        </h2>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;m a full-stack developer, quant geek, and a soon-to-be ML wizard.
          Currently pursuing my MCA while building real-world projects that
          blend{" "}
          <span className="text-red-500 font-medium">
            finance, tech, and design
          </span>
          .
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;ve shipped products in <span className="font-medium">web dev</span>{" "}
          (MERN),
          <span className="font-medium"> Android dev</span> (React Native +
          Firebase), and
          <span className="font-medium"> quant finance</span> (Python, pandas,
          trading algos). My stack includes Python, JS/TS, C++, AWS, Git, and I
          love clean UI.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          Currently building <span className="font-semibold">Zenin</span> (a
          money-tracking app) and <span className="font-semibold">Dazai</span>{" "}
          (a trading bot). On the side, I&apos;m diving deep into{" "}
          <span className="text-red-500 font-semibold">machine learning</span>{" "}
          to push my quant skills further.
        </p>
        <p className="text-lg text-muted-foreground">
          I&apos;m that guy who mixes{" "}
          <span className="italic">markets + models + mobile apps</span>. If
          it&apos;s fast, useful, and minimal—I&apos;m building it.
        </p>
      </motion.section>
    </main>
  );
}
