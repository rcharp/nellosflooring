import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteModalProvider } from "./components/QuoteModal";
import Index from "./pages/Index";
import ReviewPage from "./pages/ReviewPage";
import HardwoodFlooringPage from "./pages/HardwoodFlooringPage";
import LuxuryVinylPlankPage from "./pages/LuxuryVinylPlankPage";
import LaminateFlooringPage from "./pages/LaminateFlooringPage";
import SandAndRefinishPage from "./pages/SandAndRefinishPage";
import FloorCleaningPage from "./pages/FloorCleaningPage";
import ManateeCountyPage from "./pages/areas/ManateeCountyPage";
import SarasotaCountyPage from "./pages/areas/SarasotaCountyPage";
import PinellasCountyPage from "./pages/areas/PinellasCountyPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import HVACTipsPage from "./pages/HVACTipsPage";
import TipDetailPage from "./pages/TipDetailPage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuotePage />} />
            
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/services/hardwood-flooring" element={<HardwoodFlooringPage />} />
            <Route path="/services/luxury-vinyl-plank" element={<LuxuryVinylPlankPage />} />
            <Route path="/services/laminate-flooring" element={<LaminateFlooringPage />} />
            <Route path="/services/sand-and-refinish" element={<SandAndRefinishPage />} />
            <Route path="/services/floor-cleaning" element={<FloorCleaningPage />} />
            <Route path="/areas/manatee-county" element={<ManateeCountyPage />} />
            <Route path="/areas/sarasota-county" element={<SarasotaCountyPage />} />
            <Route path="/areas/pinellas-county" element={<PinellasCountyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tips" element={<HVACTipsPage />} />
            <Route path="/tips/:slug" element={<TipDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
