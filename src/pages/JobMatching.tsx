import { Briefcase, CheckCircle, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    title: "Customer Support Executive",
    company: "Quess Corp",
    location: "Delhi NCR",
    salary: "₹25,000 - ₹30,000/month",
    matchPercentage: 68,
    skillsReady: 5,
    skillsTotal: 7,
    skills: [
      { name: "Professional Communication", status: "ready" },
      { name: "Email Etiquette", status: "ready" },
      { name: "Phone Skills", status: "ready" },
      { name: "Basic Computer", status: "ready" },
      { name: "Hindi + English", status: "ready" },
      { name: "Advanced English", status: "inProgress", week: 2 },
      { name: "CRM Software", status: "locked", week: 5 },
    ],
  },
  {
    id: 2,
    title: "BPO Operations Associate",
    company: "Concentrix",
    location: "Noida",
    salary: "₹28,000 - ₹35,000/month",
    matchPercentage: 45,
    skillsReady: 3,
    skillsTotal: 7,
    skills: [
      { name: "Professional Communication", status: "ready" },
      { name: "Email Etiquette", status: "ready" },
      { name: "Hindi + English", status: "ready" },
      { name: "Phone Skills", status: "inProgress", week: 2 },
      { name: "Advanced English", status: "locked", week: 3 },
      { name: "CRM Software", status: "locked", week: 5 },
      { name: "Data Entry Speed", status: "locked", week: 6 },
    ],
  },
  {
    id: 3,
    title: "Customer Care Executive",
    company: "Teleperformance",
    location: "Gurugram",
    salary: "₹22,000 - ₹28,000/month",
    matchPercentage: 72,
    skillsReady: 6,
    skillsTotal: 7,
    skills: [
      { name: "Professional Communication", status: "ready" },
      { name: "Email Etiquette", status: "ready" },
      { name: "Phone Skills", status: "ready" },
      { name: "Basic Computer", status: "ready" },
      { name: "Hindi + English", status: "ready" },
      { name: "Customer Service Basics", status: "ready" },
      { name: "CRM Software", status: "locked", week: 5 },
    ],
  },
];

const JobMatching = () => {
  return (
    <div className="max-w-[900px] mx-auto p-8 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Jobs Matched For You</h2>
        <p className="text-muted-foreground">
          Based on your current skills and learning progress
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["All", "High Match (>70%)", "Learning in Progress", "Future Ready"].map((filter, index) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0
                ? "bg-secondary text-secondary-foreground"
                : "border hover:bg-muted"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4 flex-1">
                <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-lg font-semibold text-accent">{job.salary}</p>
                </div>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mb-2">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - job.matchPercentage / 100)}`}
                      className={
                        job.matchPercentage >= 60
                          ? "text-secondary"
                          : job.matchPercentage >= 40
                          ? "text-warning"
                          : "text-muted-foreground"
                      }
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-semibold">{job.matchPercentage}%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Your Match</p>
              </div>
            </div>

            {/* Skills Assessment */}
            <div className="border-t pt-6">
              <p className="text-sm font-medium mb-3">Skills Assessment</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Skills Ready:</span>
                  <span className="font-medium">{job.skillsReady} of {job.skillsTotal} skills</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full"
                    style={{ width: `${(job.skillsReady / job.skillsTotal) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                      skill.status === "ready"
                        ? "bg-success/10 text-success border border-success/30"
                        : skill.status === "inProgress"
                        ? "bg-warning/10 text-warning border border-warning/30"
                        : "bg-muted text-muted-foreground border"
                    }`}
                  >
                    {skill.status === "ready" && <CheckCircle className="w-3 h-3" />}
                    {skill.status === "inProgress" && <Clock className="w-3 h-3" />}
                    {skill.status === "locked" && <Lock className="w-3 h-3" />}
                    <span>{skill.name}</span>
                    {skill.week && (
                      <span className="opacity-75">
                        {skill.status === "inProgress" ? `Week ${skill.week}` : `Week ${skill.week}`}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  View Full Details
                </Button>
                <Button className="flex-1">
                  Track Missing Skills →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMatching;
