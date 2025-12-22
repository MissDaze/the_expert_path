import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PaymentProvider } from "./contexts/PaymentContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import CourseDashboard from "./pages/CourseDashboard";
import ModuleDetail from "./pages/ModuleDetail";
import Success from "./pages/Success";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/success"} component={Success} />
      <Route path={"/dashboard"} component={CourseDashboard} />
      <Route path={"/course/:courseId/module/:moduleId"} component={ModuleDetail} />
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
      <PaymentProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </PaymentProvider>
    </ErrorBoundary>
  );
}

export default App;
