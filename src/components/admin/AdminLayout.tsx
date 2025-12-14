import { ReactNode, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  MapPin, 
  DollarSign, 
  Dumbbell, 
  MessageSquare, 
  Home, 
  Info, 
  Gift, 
  LogOut,
  Loader2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const navItems = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/hero", label: "Hero Section", icon: Home },
  { path: "/admin/intro-offer", label: "Intro Offer", icon: Gift },
  { path: "/admin/studios", label: "Studios", icon: MapPin },
  { path: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { path: "/admin/class-types", label: "Class Types", icon: Dumbbell },
  { path: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { path: "/admin/about", label: "About Page", icon: Info },
];

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-card border-r border-border
        transform transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <Link to="/admin" className="text-xl font-heading font-bold">
              balance<span className="text-primary">.</span> CMS
            </Link>
            <button 
              className="lg:hidden" 
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border space-y-2">
            <a 
              href="/" 
              target="_blank" 
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>View Website</span>
            </a>
            <button
              onClick={signOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-card border-b border-border px-6 py-4 flex items-center gap-4">
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-heading font-bold text-foreground">{title}</h1>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
