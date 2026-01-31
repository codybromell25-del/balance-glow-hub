import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/", { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <SEO 
        title="Page Not Found | balance studios"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="mb-4 text-6xl font-display font-bold text-foreground">404</h1>
          <p className="mb-2 text-xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-6 text-muted-foreground">
            Redirecting to homepage in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
