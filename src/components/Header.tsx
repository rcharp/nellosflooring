import { useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/nello-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Hardwood Flooring", href: "/services/hardwood-flooring" },
      { label: "Luxury Vinyl Plank", href: "/services/luxury-vinyl-plank" },
      { label: "Laminate Flooring", href: "/services/laminate-flooring" },
      { label: "Sand & Refinish", href: "/services/sand-and-refinish" },
      { label: "Floor Cleaning", href: "/services/floor-cleaning" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Manatee County", href: "/areas/manatee-county" },
      { label: "Sarasota County", href: "/areas/sarasota-county" },
      { label: "Pinellas County", href: "/areas/pinellas-county" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Contact",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Get In Contact", href: "/contact" },
      { label: "Blog", href: "/tips" },
    ],
  },
];

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header
      className={
        transparent
          ? "absolute top-0 left-0 right-0 z-50 max-w-[100vw]"
          : "sticky top-0 z-50 border-b border-border bg-white max-w-[100vw]"
      }
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8 max-w-[100vw]">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 mr-2 lg:mr-4">
          <img
            src={logo}
            alt="Nello's Flooring"
            className="w-16 lg:w-auto h-auto"
            style={{ maxHeight: '150px' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors rounded-lg ${transparent ? "text-white/90 hover:text-white" : "text-foreground/70 hover:text-foreground"}`}>
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 z-50 rounded-xl shadow-lg border border-border py-2 min-w-[200px] bg-white"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-base text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-base font-medium transition-colors rounded-lg ${transparent ? "text-white/90 hover:text-white" : "text-foreground/70 hover:text-foreground"}`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA - always visible */}
        <div className="flex items-center flex-1 lg:flex-none min-w-0">
          <div className="flex items-center justify-center gap-3 flex-1 lg:flex-none lg:justify-end">
            <a
              href="tel:+17276442305"
              className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors whitespace-nowrap rounded-[10px]"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 shrink-0" />
              (727) 644-2305
            </a>
            <button
              onClick={openQuoteModal}
              className="px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap rounded-[10px]"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground ml-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground"
                    >
                      {link.label}
                      {mobileDropdown === link.label ? (
                        <ChevronUp className="w-4 h-4 text-foreground/50" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-foreground/50" />
                      )}
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                              className="block pl-4 py-2 text-base text-foreground/70 hover:text-foreground transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                    className="block py-2 text-base font-medium text-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-4 space-y-3 border-t border-border">
                <a
                  href="tel:+17276442305"
                  className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 text-sm font-semibold border border-secondary text-secondary rounded-[10px]"
                >
                  <Phone className="w-5 h-5" /> (727) 644-2305
                </a>
                <button
                  onClick={() => { setMobileOpen(false); openQuoteModal(); }}
                  className="block w-full text-center px-6 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-[10px]"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
