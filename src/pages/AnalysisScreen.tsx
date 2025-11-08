import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Target, Briefcase, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalysisScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearInterval(progressInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto" />
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Analyzing your profile...
            </h2>
            <p className="text-muted-foreground">
              Understanding your background and goals
            </p>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-[900px] mx-auto px-6 space-y-8 animate-in fade-in duration-700">
        {/* Career Snapshot */}
        <div className="bg-primary/5 border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-12 h-12 text-primary" />
            <h2 className="text-2xl font-semibold">Your Career Snapshot</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Currently</p>
              <p className="font-medium">Delivery/Driving, Delhi</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Available Daily</p>
              <p className="font-medium">1 hour</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Goal</p>
              <p className="font-medium">Customer Service Role</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Languages</p>
              <p className="font-medium">Hindi, English (Basic)</p>
            </div>
          </div>
        </div>

        {/* Recommended Path */}
        <div className="bg-card border rounded-lg p-8 border-l-4 border-l-secondary">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-secondary" />
            <h3 className="text-xl font-semibold">
              Recommended Path: Customer Experience Champion
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    Customer Support Executive
                  </h4>
                  <p className="text-sm font-medium text-accent">
                    ₹25,000 - ₹30,000/month
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Your Fit:</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">After Learning:</span>
                    <span className="font-medium text-secondary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                  Timeline: <span className="font-medium text-foreground">8 weeks</span>
                </p>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    BPO Operations Associate
                  </h4>
                  <p className="text-sm font-medium text-accent">
                    ₹28,000 - ₹35,000/month
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Your Fit:</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">After Learning:</span>
                    <span className="font-medium text-secondary">80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "80%" }} />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                  Timeline: <span className="font-medium text-foreground">10 weeks</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-card border rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-8">Your Learning Path (8 weeks)</h3>
          
          <div className="space-y-6">
            {[
              {
                week: "Week 1-2",
                title: "Professional English Communication",
                description: "Email writing, phone etiquette, basic grammar",
              },
              {
                week: "Week 3-4",
                title: "Customer Service Fundamentals",
                description: "Handling complaints, active listening, empathy",
              },
              {
                week: "Week 5-6",
                title: "CRM Tools + AI Assistants",
                description: "Zoho, Freshdesk, ChatGPT for productivity",
              },
              {
                week: "Week 7-8",
                title: "Corporate Readiness + Interview Prep",
                description: "Resume building, mock interviews, LinkedIn",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-0.5 h-12 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-xs text-muted-foreground mb-1">{item.week}</p>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full py-6 text-base font-semibold"
          size="lg"
        >
          Start My Journey →
        </Button>
      </div>
    </div>
  );
};

export default AnalysisScreen;
