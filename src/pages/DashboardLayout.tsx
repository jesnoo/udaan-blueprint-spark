import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Briefcase, FileText, User } from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Home", path: "/dashboard" },
    { icon: BookOpen, label: "My Learning", path: "/dashboard/learning" },
    { icon: Briefcase, label: "Jobs", path: "/dashboard/jobs" },
    { icon: FileText, label: "Resume", path: "/dashboard/resume" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-[240px] border-r border-border bg-card/50 backdrop-blur-sm flex-shrink-0 flex flex-col">
        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold text-primary mb-12">Udaan</h1>
          
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-102"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-border">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:bg-muted p-3 rounded-xl transition-all duration-200 hover:scale-102"
            onClick={() => navigate("/dashboard/profile")}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg shadow-lg">
              R
            </div>
            <div>
              <p className="font-semibold text-foreground">Raj Kumar</p>
              <p className="text-xs text-muted-foreground">
                View Profile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
