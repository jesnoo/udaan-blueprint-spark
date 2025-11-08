import { useNavigate } from "react-router-dom";
import { Flame, Clock, Target, CheckCircle, Award, TrendingUp, Mail, Mic, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1000px] mx-auto p-8 space-y-8">
      {/* Progress Card */}
      <div className="bg-muted/30 border rounded-lg p-8">
        <div className="flex items-center justify-around mb-8 pb-8 border-b">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame className="w-6 h-6 text-accent" />
              <p className="text-3xl font-semibold">3</p>
            </div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-primary" />
              <p className="text-3xl font-semibold">12h</p>
            </div>
            <p className="text-sm text-muted-foreground">Total Learning</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-6 h-6 text-secondary" />
              <p className="text-3xl font-semibold">Week 2 of 8</p>
            </div>
            <p className="text-sm text-muted-foreground">On Track</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Professional Email Communication</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to write clear, professional emails
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>
                <Button onClick={() => navigate("/learn/email-basics")}>
                  Continue Learning →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6 text-center">
            <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="text-3xl font-semibold mb-1">8</p>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <Award className="w-10 h-10 text-warning mx-auto mb-3" />
            <p className="text-3xl font-semibold mb-1">2</p>
            <p className="text-sm text-muted-foreground">Skills Mastered</p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <TrendingUp className="w-10 h-10 text-success mx-auto mb-3" />
            <p className="text-3xl font-semibold mb-1">85%</p>
            <p className="text-sm text-muted-foreground">On Track</p>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Your 8-Week Journey</h3>
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    i < 1
                      ? "bg-secondary text-secondary-foreground"
                      : i === 1
                      ? "bg-secondary text-secondary-foreground ring-4 ring-secondary/30"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < 1 ? <CheckCircle className="w-5 h-5" /> : i + 1}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Week {i + 1}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-medium">Professional English Communication</p>
        </div>
      </div>

      {/* Coming Up */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Next Milestones</h3>
        <div className="space-y-4">
          <div className="bg-card border rounded-lg p-6 opacity-60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center relative">
                <Mic className="w-6 h-6 text-muted-foreground" />
                <Lock className="w-4 h-4 absolute -top-1 -right-1 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Voice Practice Sessions</h4>
                <p className="text-sm text-muted-foreground">Unlocks in Week 4</p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 opacity-60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center relative">
                <Phone className="w-6 h-6 text-muted-foreground" />
                <Lock className="w-4 h-4 absolute -top-1 -right-1 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Mock Phone Call Practice</h4>
                <p className="text-sm text-muted-foreground">Unlocks in Week 6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
