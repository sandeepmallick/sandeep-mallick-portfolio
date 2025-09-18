"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import TechStackIcon from "@/components/TechStackIcon";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-5xl lg:text-6xl sm:text-5xl font-bold tracking-tight"
          animate={{
            y: [0, -9, 0],
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        >
          I Build Extenstions Where <br />
          <span className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
            Security meets Innovation
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cyber Security Enthusiast <br />
          Experienced in Linux-powered tools  <br />
          Front-End dev with Python magic <br />
          Integrating AI to make code faster and smarter  <br />I turn logic into leverage
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
          code . Build . Secure . Repeat
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <MotionLink
            href="/projects"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic"></span>
          </MotionLink>
        </div>
      </motion.div>

      {/* about me section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-4xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
          <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          A tech nerd who loves to explore new things an have a urge to know about everthing i love to solve  problems  with code Currently exploring the fields of <strong>cyber security</strong> , <strong>automation</strong>, <strong>network security</strong> and <strong>AGI</strong>. 
        </p>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </MotionLink>
      </motion.div>

      {/* projects preview section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-7xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70  to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <ProjectCard
            title="Llama Mini Chatbot Extension"
            desc="Sandeep AI is a lightweight Chrome extension that brings the power of LLAMA API right into your browser."
            tech={["Llama API", "JSON","Javascript","HTML","CSS"]}
          />
          {/* Project 2 */}
          <ProjectCard
            title="Inventory Management System-GUI"
            desc="This is a GUI-based application use to manage inventory records, making it easy to add, update, delete, select, and export data in excel or stored in a MySQL database"
            tech={["Python", "tkinter", "MySQL","Excel"]}
          />

          {/* Project 3 */}
          <ProjectCard
            title="Close Tabs Extenstion"
            desc="The Close Tab Chrome extension allows users to quickly close the active browser tab with a single click or shortcut."
            tech={["JavaScript", "JSON", "HTML", "CSS"]}
          />

          {/* project 4 */}
{/*           <ProjectCard
            title="Lexx"
            desc="AI legal chat focused on Indian laws. RAG-powered answers with
                real citations. Built with Next.js, FastAPI & OpenRouter."
            tech={["Next.js", "FastAPI", "Python", "RAG"]}
          /> */}

            
        </div>
      </motion.div>

      {/* tech stack section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Tech 1 */}
          <TechStackIcon
            src="/tech-icons/python.svg"
            name="Python"
            alt="python"
          />
          {/* Tech 2 */}
          <TechStackIcon
            src="/tech-icons/javascript.svg"
            name="Javascript"
            alt="javascript"
          />
          {/* Tech 3 */}
          <TechStackIcon src="/tech-icons/type.svg" 
          name="TypeScript"
          alt="TypeScript" />

          {/* Tech 4 */}
          <TechStackIcon
            src="/tech-icons/mysql.svg"
            name="MYSQL"
            alt="MYSQL"
          />
          {/* Tech 5 */}
          <TechStackIcon src="/tech-icons/react.svg" 
          name="React"
          alt="React" />

          
          {/* Tech 6 */}
          <TechStackIcon
            src="/tech-icons/tailwindcss.svg"
            name="Tailwind CSS"
            alt="Tailwind CSS"
          />
          {/* Tech 7 */}
          <TechStackIcon
            src="/tech-icons/git.svg"
            alt="Git"
            name="Git"
          />
          {/* Tech 8 */}
          <TechStackIcon src="/tech-icons/pngaaa.com-4804707.svg" 
          alt="Linux"
          name="Linux" />
        </div>
      </motion.div>
    </main>
  );
}
