import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/refund"} component={Refund} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
