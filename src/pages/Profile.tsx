import { User, Download, Award, Calendar, Clock, Target, Mail, Phone, Flame, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/StatCard";
import { SkillBadge } from "@/components/SkillBadge";
import { TaraMascot } from "@/components/TaraMascot";

const Profile = () => {
  // Mock user data
  const mockUserData = {
    name: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91 98765 43210",
    desiredRole: "Data Entry Specialist",
    skills: [
      { name: "Email", icon: <Mail className="w-5 h-5" />, completed: true, completedDate: "Jan 2025" },
      { name: "Excel", icon: <Target className="w-5 h-5" />, completed: true, completedDate: "Jan 2025" },
      { name: "Phone", icon: <Phone className="w-5 h-5" />, completed: true, completedDate: "Dec 2024" },
      { name: "Typing", icon: <Clock className="w-5 h-5" />, completed: false },
      { name: "Data Entry", icon: <TrendingUp className="w-5 h-5" />, completed: false },
    ],
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl border-2 border-primary/30 p-8 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-4xl shadow-xl">
                R
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full border-4 border-card flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground mb-1">{mockUserData.name}</h1>
              <p className="text-lg text-primary font-medium mb-2">Preparing for: {mockUserData.desiredRole}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{mockUserData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{mockUserData.phone}</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              <User className="w-5 h-5 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 animate-slide-up">
          <div className="relative">
            <StatCard
              icon={<Target className="w-6 h-6" />}
              label="Overall Progress"
              value="65%"
              variant="primary"
            />
            <div className="mt-3">
              <Progress value={65} className="h-2" />
            </div>
          </div>
          
          <StatCard
            icon={<Award className="w-6 h-6" />}
            label="Lessons Completed"
            value={12}
            subtitle="3 this week"
            variant="success"
          />
          
          <StatCard
            icon={<Flame className="w-6 h-6" />}
            label="Current Streak"
            value="7 days"
            subtitle="Personal best!"
            variant="default"
          />
          
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            label="Total Time"
            value="18 hours"
            subtitle="This month"
            variant="default"
          />
        </div>

        {/* Skills Mastered */}
        <div className="animate-scale-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Skills Mastered</h2>
              <p className="text-sm text-muted-foreground">Your completed learning milestones</p>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            {mockUserData.skills
              .filter(skill => skill.completed)
              .map((skill, index) => (
                <SkillBadge
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  completed={skill.completed}
                  date={skill.completedDate}
                />
              ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-card rounded-2xl border-2 border-border p-8 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Your Progress Resume</h3>
              <p className="text-muted-foreground">
                Download a professional resume showcasing your completed courses and newly acquired skills
              </p>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="animate-scale-in">
          <h2 className="text-2xl font-bold text-foreground mb-6">Achievement Timeline</h2>
          <div className="bg-card rounded-2xl border-2 border-border p-8 space-y-6">
            {[
              { date: "Dec 2024", title: "Started Your Journey", desc: "Completed onboarding and set career goals", icon: <Target className="w-5 h-5" /> },
              { date: "Dec 2024", title: "First Lesson Complete", desc: "Mastered professional email communication", icon: <Award className="w-5 h-5" /> },
              { date: "Jan 2025", title: "7-Day Streak!", desc: "Maintained consistent daily learning", icon: <Flame className="w-5 h-5" /> },
              { date: "Jan 2025", title: "Job Ready: 65%", desc: "You're 60% toward your next goal!", icon: <TrendingUp className="w-5 h-5" /> },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-4 relative">
                {index !== 3 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 relative z-10">
                  {milestone.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  <h4 className="text-lg font-bold text-foreground">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TaraMascot 
        message="You're 60% toward your next goal!"
        position="bottom-right"
        emotion="encouraging"
      />
    </div>
  );
};

export default Profile;
