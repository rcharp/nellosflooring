import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

      {/* 
        Iframe is ALWAYS mounted to prevent white flash.
        When closed: positioned off-screen so iframe stays loaded but can't intercept events.
        When open: positioned on-screen as a modal overlay.
      */}
      <div
        className="fixed z-[100]"
        style={{
          top: isOpen ? 0 : 0,
          left: isOpen ? 0 : "-200vw",
          right: isOpen ? 0 : "auto",
          bottom: isOpen ? 0 : "auto",
          width: isOpen ? "100%" : "100%",
          height: isOpen ? "100%" : "100%",
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
            className="relative rounded-2xl border-2 border-secondary shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#0f172a",
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
            <div className="overflow-y-auto max-h-[90vh]" style={{ backgroundColor: "#0f172a" }}>
              <iframe
                src="https://api.juniesystems.com/widget/form/P2loR2dW6LgPnGhKf4Px"
                style={{ width: "100%", height: "883px", border: "none", borderRadius: "10px" }}
                id="modal-P2loR2dW6LgPnGhKf4Px"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Get A Quote Form"
                data-height="883"
                data-layout-iframe-id="modal-P2loR2dW6LgPnGhKf4Px"
                data-form-id="P2loR2dW6LgPnGhKf4Px"
                title="Get A Quote Form"
              />
            </div>
          </div>
        </div>
      </div>
    </QuoteModalContext.Provider>
  );
};
