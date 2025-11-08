import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import OnboardingChat from "./pages/OnboardingChat";
import AnalysisScreen from "./pages/AnalysisScreen";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import LearningExperience from "./pages/LearningExperience";
import LearningLesson2 from "./pages/LearningLesson2";
import JobMatching from "./pages/JobMatching";
import ResumeView from "./pages/ResumeView";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/onboarding" element={<OnboardingChat />} />
          <Route path="/analysis" element={<AnalysisScreen />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="learning" element={<Dashboard />} />
            <Route path="jobs" element={<JobMatching />} />
            <Route path="resume" element={<ResumeView />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/learn/email-basics" element={<LearningExperience />} />
          <Route path="/learn/email-body" element={<LearningLesson2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
