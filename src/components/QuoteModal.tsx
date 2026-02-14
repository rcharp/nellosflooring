import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteForm from "./QuoteForm";

interface QuoteModalContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}

      <div
        className="fixed z-[100]"
        style={{
          top: 0,
          left: isOpen ? 0 : "-200vw",
          right: isOpen ? 0 : "auto",
          bottom: isOpen ? 0 : "auto",
          width: "100%",
          height: "100%",
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={closeQuoteModal}
            />
          )}
        </AnimatePresence>

        <div
          className="absolute inset-0 flex items-center justify-center p-4"
          onClick={isOpen ? closeQuoteModal : undefined}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: isOpen ? "scale(1)" : "scale(0.95)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.25s ease, opacity 0.25s ease",
            }}
          >
            {isOpen && (
              <button
                onClick={closeQuoteModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            )}
            <div className="overflow-y-auto max-h-[90vh]">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </div>
    </QuoteModalContext.Provider>
  );
};
