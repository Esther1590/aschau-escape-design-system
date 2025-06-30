
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Wellness from "./pages/Wellness";
import Culture from "./pages/Culture";
import PlanTrip from "./pages/PlanTrip";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import SchlossHohenaschau from "./pages/SchlossHohenaschau";
import LocalHistoryMuseum from "./pages/LocalHistoryMuseum";
import TraditionalCraftWorkshops from "./pages/TraditionalCraftWorkshops";
import FolkMusicEvenings from "./pages/FolkMusicEvenings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <TranslationProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/plan-trip" element={<PlanTrip />} />
              <Route path="/spring" element={<Spring />} />
              <Route path="/summer" element={<Summer />} />
              <Route path="/autumn" element={<Autumn />} />
              <Route path="/winter" element={<Winter />} />
              <Route path="/schloss-hohenaschau" element={<SchlossHohenaschau />} />
              <Route path="/local-history-museum" element={<LocalHistoryMuseum />} />
              <Route path="/traditional-craft-workshops" element={<TraditionalCraftWorkshops />} />
              <Route path="/folk-music-evenings" element={<FolkMusicEvenings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TranslationProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
