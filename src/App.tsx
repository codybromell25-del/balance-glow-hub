import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import Schedule from "./pages/Schedule";
import TestBooking from "./pages/TestBooking";
import BookingBray from "./pages/BookingBray";
import BookingClane from "./pages/BookingClane";
import BookingEnfield from "./pages/BookingEnfield";
import BookingKildare from "./pages/BookingKildare";
import BookingBlessington from "./pages/BookingBlessington";
import BookAll from "./pages/BookAll";
import OurStudios from "./pages/OurStudios";
import StudioClane from "./pages/StudioClane";
import StudioKildare from "./pages/StudioKildare";
import StudioBlessington from "./pages/StudioBlessington";
import StudioEnfield from "./pages/StudioEnfield";
import StudioBray from "./pages/StudioBray";
import Terms from "./pages/Terms";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/test-booking" element={<TestBooking />} />
          <Route path="/booking/bray" element={<BookingBray />} />
          <Route path="/booking/clane" element={<BookingClane />} />
          <Route path="/booking/enfield" element={<BookingEnfield />} />
          <Route path="/booking/kildare" element={<BookingKildare />} />
          <Route path="/booking/blessington" element={<BookingBlessington />} />
          <Route path="/book-class" element={<BookAll />} />
          <Route path="/our-studios" element={<OurStudios />} />
          <Route path="/studio/clane" element={<StudioClane />} />
          <Route path="/studio/kildare" element={<StudioKildare />} />
          <Route path="/studio/blessington" element={<StudioBlessington />} />
          <Route path="/studio/enfield" element={<StudioEnfield />} />
          <Route path="/studio/bray" element={<StudioBray />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
