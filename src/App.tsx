import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingBookButton from "./components/FloatingBookButton";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import Shop from "./pages/Shop";
import Schedule from "./pages/Schedule";
import TestBooking from "./pages/TestBooking";
import BookingBray from "./pages/BookingBray";
import BookingClane from "./pages/BookingClane";
import BookingEnfield from "./pages/BookingEnfield";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingBookButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/test-booking" element={<TestBooking />} />
          <Route path="/booking/bray" element={<BookingBray />} />
          <Route path="/booking/clane" element={<BookingClane />} />
          <Route path="/booking/enfield" element={<BookingEnfield />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
