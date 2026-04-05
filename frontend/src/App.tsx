
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/ui/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* Redirect /faqs to the home page with the FAQs section */}
            <Route path="/faqs" element={<Navigate to="/#faqs" replace />} />
            <Route path="/tracks" element={<Navigate to="/#tracks" replace />} />
            <Route path="/sponsors" element={<Navigate to="/#sponsors" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
