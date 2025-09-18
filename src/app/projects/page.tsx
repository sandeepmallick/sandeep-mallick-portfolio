"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Llama Mini Chatbot Extension",
    description:"Sandeep AI is a lightweight Chrome extension that brings the power of LLAMA API right into your browser. Ask questions, get smart answers instantly, and enjoy a minimalist design for quick interactions.",
    link: "https://github.com/sandeepmallick/Llama-Mini-Chatbot-Extension",
    color: "text-rose-500",
    image: "images/AI by snadeep.png", // put your image path here
    imageClass: "max-h-60 rotate-5",
  },
  {
    title: "Inventory Management System",
    description:"This is a GUI-based Inventory Management System built using Python, Tkinter, and MySQL. The application provides an interactive interface to manage inventory records, making it easy to add, update, delete, select, and export data in excel or stored in a MySQL database.",
    link: "https://github.com/sandeepmallick/Inventory-Management-System--GUI",
    color: "text-emerald-500",
    image: "images/Screenshot 2025-09-17 182815.png",
    imageClass: "", // placeholder or actual image
  },
  {
    title: "Close Tabs Extenstion",
    description:"The Close Tab Chrome extension allows users to quickly close the active browser tab with a single click or shortcut. This lightweight extension improves browsing efficiency by reducing the need for multiple clicks.",
    image: "/images/Screenshot 2025-09-18 020853.png",
    link: "https://github.com/sandeepmallick/Close-Tabs-Extenstion",
    color: "text-blue-500",
    imageClass: "rotate-4 ", // placeholder or actual image
  },

  {
    title: "Latest News Extenstion",
    description:"loading ........",
    image: "/images/Screenshot 2025-09-18 030026.png",
    link: "https://github.com/sandeepmallick/News-Extenstion",
    color: "text-yellow-500",
    imageClass: "rotate-4 ", // placeholder or actual image
  },

  {
    title: "Generate strong password",
    description:"A simple password generator built with JavaScript that allows users to customize their passwords based on length and character types. It ensures stronger security by including options for numbers, symbols, uppercase, and lowercase letters. With a clean interface and quick generation, users can create secure passwords instantly.",
    image: "/images/image.png",
    link: "https://generate-strong-password-two.vercel.app/",
    color: "text-orange-500",
    imageClass: "rotate-4 ", // placeholder or actual image
    
  },
];


export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/70 via-zinc-800 to-red-600">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mt-4 mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex flex-col sm:flex-row items-center bg-neutral-900 rounded-2xl shadow-xl p-8"
          >
            {/* Left side text */}
            <div className="sm:w-1/2">
              <h3 className={`text-3xl font-bold ${project.color}`}>
                {project.title}
              </h3>
              <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className={`mt-6 inline-block ${project.color} font-medium hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub &rarr;
              </a>
            </div>

            {/* Right side image */}
            <motion.div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
              <motion.img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={`max-w-full h-full rounded-lg shadow-lg transform ${project.imageClass} transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:z-20 group-hover:shadow-2xl`}
                style={{ objectFit: "cover" }}
                whileHover={{
                  scale:1.2,
                  rotateY:8,
                  rotateX:1,
                  zIndex:19,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
