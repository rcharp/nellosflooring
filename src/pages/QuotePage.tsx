import { useEffect } from "react";
import { useQuoteModal } from "@/components/QuoteModal";
import Index from "./Index";

const FORM_URL = "https://api.juniesystems.com/widget/form/P2loR2dW6LgPnGhKf4Px";

const QuotePage = () => {
  const { openQuoteModal } = useQuoteModal();

  // Preload the form iframe and its embed script as early as possible
  useEffect(() => {
    // Prefetch the form page
    const linkPrefetch = document.createElement("link");
    linkPrefetch.rel = "prefetch";
    linkPrefetch.href = FORM_URL;
    document.head.appendChild(linkPrefetch);

    // Preload the embed script
    const linkScript = document.createElement("link");
    linkScript.rel = "preload";
    linkScript.as = "script";
    linkScript.href = "https://api.juniesystems.com/js/form_embed.js";
    document.head.appendChild(linkScript);

    openQuoteModal();

    return () => {
      document.head.removeChild(linkPrefetch);
      document.head.removeChild(linkScript);
    };
  }, [openQuoteModal]);

  return <Index />;
};

export default QuotePage;
