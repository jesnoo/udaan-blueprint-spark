import { useNavigate } from "react-router-dom";
import { BookOpen, Target, TrendingUp, Award, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LessonCard } from "@/components/LessonCard";
import { StatCard } from "@/components/StatCard";
import { TaraMascot } from "@/components/TaraMascot";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">Udaan</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-foreground">60% to Goal</span>
              <div className="w-24">
                <Progress value={60} className="h-2" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Welcome */}
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-2">Welcome back, Raj! 👋</h2>
          <p className="text-lg text-muted-foreground">Let's continue building your skills today</p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Current Lesson */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Lesson Card - Prominent */}
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">Continue Learning</h3>
              <LessonCard
                title="Professional Email Communication"
                description="Learn to write clear and professional emails for work"
                progress={37.5}
                icon={<BookOpen className="w-6 h-6" />}
                estimatedTime="15 min remaining"
                variant="active"
                onClick={() => navigate("/dashboard/learning")}
                className="mb-4"
              />
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => navigate("/dashboard/learning")}
              >
                Continue Lesson
              </Button>
            </div>

            {/* Daily Goal */}
            <div className="bg-card rounded-2xl border-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-foreground">Daily Goal</h4>
                  <p className="text-sm text-muted-foreground">2 of 3 lessons done today</p>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-muted" />
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="176" strokeDashoffset="59" className="text-primary transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">67%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-primary font-medium">Almost there! One more to go 🎯</p>
            </div>
          </div>

          {/* Right Column - Stats & Progress */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <StatCard
              icon={<Target className="w-6 h-6" />}
              label="Lessons Completed"
              value={12}
              variant="primary"
            />
            
            <StatCard
              icon={<Clock className="w-6 h-6" />}
              label="Total Time"
              value="18h"
              subtitle="This month"
              variant="default"
            />
            
            <StatCard
              icon={<Award className="w-6 h-6" />}
              label="Skills Mastered"
              value={5}
              subtitle="Keep going!"
              variant="success"
            />
          </div>
        </div>

        {/* Job Readiness Section */}
        <div className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl border-2 border-primary/30 p-8 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">Job Readiness Score</h3>
              <p className="text-muted-foreground mb-4">Based on your completed skills and progress</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary">75%</span>
                <span className="text-lg text-muted-foreground">Ready to apply</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={() => navigate("/dashboard/jobs")}
              >
                Browse Jobs
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full md:w-auto"
                onClick={() => navigate("/dashboard/resume")}
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      <TaraMascot 
        message="You're making real progress, Raj!"
        position="bottom-right"
        emotion="encouraging"
      />
    </div>
  );
};

export default Dashboard;
