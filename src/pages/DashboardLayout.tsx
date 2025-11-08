import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Briefcase, FileText } from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Home", path: "/dashboard" },
    { icon: BookOpen, label: "My Learning", path: "/dashboard/learning" },
    { icon: Briefcase, label: "Jobs", path: "/dashboard/jobs" },
    { icon: FileText, label: "Resume", path: "/dashboard/resume" },
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
      <div className="w-[200px] border-r bg-card flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-primary mb-8">Udaan</h1>
          
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 p-6 w-[200px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              R
            </div>
            <div>
              <p className="text-sm font-medium">Raj Kumar</p>
              <p className="text-xs text-muted-foreground cursor-pointer hover:underline">
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
