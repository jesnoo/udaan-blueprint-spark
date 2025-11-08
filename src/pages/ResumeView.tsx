import { Download, Share2, Lightbulb, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeView = () => {
  return (
    <div className="max-w-[800px] mx-auto p-8 space-y-6">
      {/* A4 Paper Preview */}
      <div className="bg-card shadow-lg rounded-lg p-12 border">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b">
          <h1 className="text-[32px] font-semibold mb-2">RAJ KUMAR</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>raj.kumar@email.com | +91-XXXXX-XXXXX | Delhi, India</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/rajkumar</span>
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-primary">Career Objective</h3>
          <p className="text-sm leading-relaxed">
            Motivated professional seeking a Customer Service role where I can utilize my strong
            communication skills, Hindi-English bilingual proficiency, and newly acquired AI tool
            expertise to deliver excellent customer experiences and grow within a dynamic organization.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-primary">Skills</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div className="space-y-2 text-sm">
              <p>• Professional Communication</p>
              <p>• Email & Phone Etiquette</p>
              <p>• Customer Service Fundamentals</p>
              <p>• Active Listening & Empathy</p>
            </div>
            <div className="space-y-2 text-sm">
              <p>• CRM Systems (Zoho, Freshdesk)</p>
              <p>• AI Tools (ChatGPT, Gemini)</p>
              <p>• MS Office Suite</p>
              <p>• Hindi & English (Fluent)</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-primary">Professional Certifications</h3>
          <div>
            <p className="font-medium">Customer Experience Champion Track</p>
            <p className="text-sm text-muted-foreground">Udaan AI Platform</p>
            <p className="text-sm mt-1">
              Skills: Email communication, Phone etiquette, CRM basics, AI productivity tools
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Status: In Progress (65% complete)
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Bachelor of Arts (Open University)</p>
              <p className="text-sm text-muted-foreground">XYZ Open University, 2019-2022</p>
            </div>
            <div>
              <p className="font-medium">High School Certificate</p>
              <p className="text-sm text-muted-foreground">ABC School, Delhi, 2017</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Languages</h3>
          <div className="text-sm space-y-1">
            <p>• Hindi (Native)</p>
            <p>• English (Professional proficiency)</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button className="flex-1">
          <Share2 className="w-4 h-4 mr-2" />
          Share on LinkedIn
        </Button>
      </div>

      {/* Info Box */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <p className="text-sm">
          💡 Your resume is 85% complete. Add a professional photo and complete Week 3 to unlock
          the final version.
        </p>
      </div>
    </div>
  );
};

export default ResumeView;
