import { useEffect } from "react";
import { useQuoteModal } from "@/components/QuoteModal";
import Index from "./Index";

const QuotePage = () => {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    openQuoteModal();
  }, [openQuoteModal]);

  return <Index />;
};

export default QuotePage;
