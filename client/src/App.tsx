import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import ProfileEdit from "@/pages/ProfileEdit";
import Dashboard from "@/pages/Dashboard";
import Browse from "@/pages/Browse";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/profile/edit" component={ProfileEdit} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/browse" component={Browse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
