import { motion } from "framer-motion";
import { Instagram, Github, ExternalLink } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import meImage from "./assets/me.jpg";

function App() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/yusadankamu",
      icon: <Instagram className="w-5 h-5" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/yusadankamu",
      icon: <Github className="w-5 h-5" />,
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      name: "X",
      url: "https://x.com/yusadankamu",
      icon: <FaXTwitter className="w-5 h-5" />,
      color: "bg-gradient-to-r from-slate-400 to-slate-600",
    },
    {
      name: "Contact Me",
      url: "mailto:https://wa.me/6285737347441",
      icon: <MdWhatsapp className="w-5 h-5" />,
      color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
  ];

  const projects = [
    {
      title: "Kopige Point of Sale Management System",
      description:
        "A modern cafe management system with sleek dashboard, diverse payment options, and seamless order tracking. Built with React, Tailwind CSS, and Firebase.",
      link: "https://kopigepos.vercel.app",
    },
    {
      title: "Ruang Tengah ",
      description:
        "A clean, modern, and minimalistic aesthetic Landing page for interior studio. Built by the power of Vite.js",
      link: "https://ruangtengah.vercel.app/",
    },
    {
      title: "Kopiklopedia ",
      description:
        "An ultimate coffee encyclopedia, designed to enrich the knowledge of coffee enthusiasts and baristas alike. Built with React, Tailwind CSS, and Firebase.",
      link: "https://kopiklopedia.vercel.app/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTI5M2IiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzFmMmEzYyIvPjwvZz48L3N2Zz4=')] opacity-[0.03]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex-shrink-0 mx-auto md:mx-0"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 blur-md opacity-70"></div>
                <img
                  src={meImage}
                  alt="I Wayan Dirgayusa"
                  className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/20"
                />
              </motion.div>

              <div className="text-center md:text-left">
                <motion.h1
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  I Wayan Dirgayusa
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-gray-300">Frontend Developer from Bali</p>
                  <p className="text-gray-400 text-sm">
                    Crafting beautiful digital experiences with passion and
                    precision.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`${link.color} absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                  ></div>
                  <div className="relative bg-white/5 border border-white/10 hover:border-white/20 rounded-xl group-hover:rounded-3xl p-4 flex items-center justify-between transition-all duration-300">
                    <span className="font-medium">{link.name}</span>
                    <div className="flex items-center gap-2">
                      {link.icon}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-200">
                Featured Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.link}
                    className="group block bg-white/5 border border-white/10 hover:border-white/20 rounded-xl group-hover:rounded-3xl p-4 transition-all duration-300 hover:bg-white/10"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.footer
            className="mt-8 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>© 2025 I Wayan Dirgayusa. All rights reserved.</p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}

export default App;
