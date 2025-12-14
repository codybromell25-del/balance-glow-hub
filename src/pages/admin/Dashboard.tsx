import AdminLayout from "@/components/admin/AdminLayout";
import { useStudios, useClassPacks, useMemberships, useClassTypes, useTestimonials } from "@/hooks/use-cms-data";
import { MapPin, DollarSign, Dumbbell, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ 
  title, 
  count, 
  icon: Icon, 
  href 
}: { 
  title: string; 
  count: number; 
  icon: React.ElementType;
  href: string;
}) => (
  <Link 
    to={href}
    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <TrendingUp className="w-5 h-5 text-green-500" />
    </div>
    <p className="text-3xl font-bold text-foreground mb-1">{count}</p>
    <p className="text-muted-foreground">{title}</p>
  </Link>
);

const AdminDashboard = () => {
  const { data: studios = [] } = useStudios();
  const { data: classPacks = [] } = useClassPacks();
  const { data: memberships = [] } = useMemberships();
  const { data: classTypes = [] } = useClassTypes();
  const { data: testimonials = [] } = useTestimonials();

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Welcome to balance. CMS
          </h2>
          <p className="text-muted-foreground">
            Manage your website content, pricing, and more from this dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Studios" 
            count={studios.length} 
            icon={MapPin} 
            href="/admin/studios" 
          />
          <StatCard 
            title="Class Types" 
            count={classTypes.length} 
            icon={Dumbbell} 
            href="/admin/class-types" 
          />
          <StatCard 
            title="Pricing Plans" 
            count={classPacks.length + memberships.length} 
            icon={DollarSign} 
            href="/admin/pricing" 
          />
          <StatCard 
            title="Testimonials" 
            count={testimonials.length} 
            icon={MessageSquare} 
            href="/admin/testimonials" 
          />
        </div>

        {/* Quick Links */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-lg font-heading font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/admin/hero"
              className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <p className="font-semibold text-foreground">Edit Hero Section</p>
              <p className="text-sm text-muted-foreground">Update homepage headline & CTA</p>
            </Link>
            <Link 
              to="/admin/intro-offer"
              className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <p className="font-semibold text-foreground">Manage Intro Offer</p>
              <p className="text-sm text-muted-foreground">Change pricing & features</p>
            </Link>
            <Link 
              to="/admin/testimonials"
              className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <p className="font-semibold text-foreground">Add Testimonial</p>
              <p className="text-sm text-muted-foreground">Showcase customer reviews</p>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
