"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav
      className={`w-full py-4 z-50 ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-md fixed top-0" : "bg-white shadow-md"}`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop and Mobile Header */}
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-blue-600"
          >
            <Image
              src="/ub-talk-logo.png"
              width={50}
              height={50}
              alt="Ub Talk"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:visible md:flex items-center space-x-8"
          >
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#Features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#Testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </motion.li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="md:visible"
          >
            <a
              href="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </a>
          </motion.div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <motion.ul className="flex flex-col items-center space-y-4 mt-4 pb-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    Home
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    Contact
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <a
                    href="/signup"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block"
                  >
                    Sign Up
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default LandingNav
