import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Zora Global AI";

const RouteTitle: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/services": "Services",
      "/products": "Products",
      "/contact": "Contact Us",
      "/book-appointment": "Book Appointment",
    };

    const pageTitle =
      titles[pathname] ??
      (pathname.startsWith("/services/") ? "Services" : undefined) ??
      DEFAULT_TITLE;

    document.title = `${pageTitle} | ${DEFAULT_TITLE}`;
  }, [pathname]);

  return null;
};

export default RouteTitle;
