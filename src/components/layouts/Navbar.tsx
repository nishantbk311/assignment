import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { LuCircleUserRound } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const careers = [
  { name: "Jobs", href: "/careers/jobs" },
  { name: "Internships", href: "/careers/internships" },
  { name: "Training & Internship", href: "/careers/internships" },
];

const others = [
  { name: "Blog", href: "/others/blog" },
  { name: "Verify Certificate", href: "/others/verify-certificate" },
  { name: "Our Projects", href: "/others/our-projects" },
];

const services = [
  { name: "All Services", href: "/services/blog" },
  { name: "Web Development", href: "/services/verify-certificate" },
  { name: "Mobile App Development", href: "/services/our-projects" },
  { name: "DevOps Solutions", href: "/services/our-projects" },
  { name: "Cybersecurity", href: "/services/our-projects" },
  { name: "Data Science & AI", href: "/services/our-projects" },
  { name: "Digital Marketing", href: "/services/our-projects" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", dropdown: services },
  { name: "Careers", href: "/careers", dropdown: careers },
  { name: "Others", href: "/others", dropdown: others },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card backdrop-blur-lg">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Leafclutch Logo" className="h-14" />
          </Link>

          {/* -------- Desktop Navigation -------- */}
          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`nav-link flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-card">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="pt-0.5 sm:flex"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <div className="hidden sm:flex">
              <Button asChild>
                <Link to="/login">
                  <LuCircleUserRound className="!w-6 !h-6" /> Login
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <Menu className="!h-6 !w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-20 inset-x-0 bottom-0 z-50 bg-white border-t"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Scrollable container */}
            <div className="h-auto border-b overflow-y-auto bg-card overscroll-contain px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const open = openDropdown === link.name;

                  return (
                    <div key={link.name}>
                      {/* Main link */}
                      <button
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium active:scale-[0.98]"
                        onClick={() =>
                          link.dropdown
                            ? setOpenDropdown(open ? null : link.name)
                            : setMobileMenuOpen(false)
                        }
                      >
                        <span>{link.name}</span>
                        {link.dropdown && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Dropdown links */}
                      {link.dropdown && open && (
                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l pl-3">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="rounded-md px-3 py-2 text-sm text-muted-foreground active:bg-muted"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Footer */}
                <div className="mt-4 border-t pt-4 flex flex-col gap-3">
                  {/* <Button size="icon" onClick={toggleTheme} className="mx-auto">
                    {isDark ? <Sun /> : <Moon />}
                  </Button> */}

                  <Button asChild>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <LuCircleUserRound className="!w-5 !h-5" /> Login
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
