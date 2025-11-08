import { useNavigate } from "react-router-dom";
import { User, Target, Award, Download, Calendar, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data - in real app, this would come from backend or localStorage
  const userData = {
    name: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91-XXXXX-XXXXX",
    currentWork: "Delivery/Driving",
    desiredRole: "Customer Service Executive",
    location: "Delhi, India",
    joinedDate: "January 2025",
    totalLearningTime: "12 hours",
    overallProgress: 65,
    completedSkills: [
      "Professional Email Writing",
      "Subject Line Mastery",
      "Phone Etiquette Basics",
      "Active Listening",
      "Customer Service Introduction",
    ],
    inProgressSkills: [
      "Advanced Email Composition",
      "Handling Customer Complaints",
    ],
  };

  return (
    <div className="max-w-[1000px] mx-auto p-8 space-y-6">
      {/* Profile Header Card */}
      <div className="bg-card border rounded-lg p-8">
        <div className="flex items-start gap-6">
          {/* Profile Picture Placeholder */}
          <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
            <span className="text-4xl font-semibold">R</span>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
            <div className="space-y-1 text-sm text-muted-foreground mb-4">
              <p>{userData.email}</p>
              <p>{userData.phone}</p>
              <p>{userData.location}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Joined {userData.joinedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{userData.totalLearningTime} learning time</span>
              </div>
            </div>
          </div>

          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </div>

      {/* Career Goal Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <User className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Role</p>
              <p className="font-semibold">{userData.currentWork}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Career Goal</p>
              <p className="font-semibold">{userData.desiredRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Progress Section */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Overall Progress</h3>
          </div>
          <span className="text-2xl font-semibold text-secondary">{userData.overallProgress}%</span>
        </div>
        <Progress value={userData.overallProgress} className="h-3 mb-2" />
        <p className="text-sm text-muted-foreground">
          You're making great progress! Keep learning to reach your goal.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-warning" />
          <h3 className="text-xl font-semibold">Completed Skills</h3>
          <span className="ml-auto bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
            {userData.completedSkills.length} mastered
          </span>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {userData.completedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-success/10 border border-success/30 px-4 py-2 rounded-lg"
              >
                <Award className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {userData.inProgressSkills.length > 0 && (
          <>
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3 text-muted-foreground">In Progress</h4>
              <div className="flex flex-wrap gap-2">
                {userData.inProgressSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-warning/10 border border-warning/30 px-4 py-2 rounded-lg"
                  >
                    <Clock className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Actions Section */}
      <div className="bg-card border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/dashboard/resume")} className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            View & Download Resume
          </Button>
          <Button variant="outline" onClick={() => navigate("/dashboard/jobs")} className="flex-1">
            Browse Job Matches
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
