import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import zoraLogo from "../assets/zora-logo-redesign.webp";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (navRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  const desktopBtn =
    "group relative px-7 py-2.5 font-bold rounded-full block text-sm transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-[0.99] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfbff]";
  const desktopBtnInactive =
    "text-slate-700 bg-white/72 hover:bg-violet-100 hover:text-violet-800 active:bg-violet-200 active:text-violet-900 border border-violet-100 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.92),0_10px_24px_rgba(148,163,184,0.14)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_14px_30px_rgba(148,163,184,0.18)]";
  const desktopBtnActive =
    "-translate-y-[2px] bg-white text-violet-700 border border-violet-200 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.98),0_14px_28px_rgba(167,139,250,0.18)]";
  const mobileBtn =
    "flex items-center justify-center gap-3 px-5 py-3.5 rounded-full text-lg font-bold tracking-[0.01em] whitespace-nowrap transition-all transform-gpu active:scale-[0.99] backdrop-blur-md min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90";
  const mobileBtnInactive =
    "text-slate-700 bg-white/78 hover:bg-violet-100 hover:text-violet-800 active:bg-violet-200 active:text-violet-900 border border-violet-100 shadow-[0_10px_24px_rgba(148,163,184,0.14)]";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 text-slate-900 transition-all duration-300 border-b border-violet-100/80 bg-[rgba(252,251,255,0.9)] backdrop-blur-xl shadow-[0_10px_30px_rgba(148,163,184,0.08)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            scrollTop();
          }}
        >
          <img
            src={zoraLogo}
            alt="ZoraGlobalAI"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-2 md:ml-3 lg:ml-6">

          <Link
            to="/"
            className={`${desktopBtn} ${location.pathname === "/" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${desktopBtn} ${location.pathname === "/about" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            About
          </Link>

          {/* BLOG ADDED */}
          <Link
            to="/blog"
            className={`${desktopBtn} ${location.pathname.startsWith("/blog") ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            Blog
          </Link>

          <Link
            to="/services"
            className={`${desktopBtn} ${location.pathname.startsWith("/services") ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            Services
          </Link>

          

          <button
            type="button"
            className={`${desktopBtn} ${desktopBtnInactive}`}
          >
            Products
          </button>

          <Link
            to="/contact"
            className={`${desktopBtn} ${location.pathname === "/contact" ? desktopBtnActive : desktopBtnInactive}`}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="bg-violet-600 text-white font-bold text-[11px] lg:text-xs xl:text-sm px-2.5 lg:px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 shadow-[0_10px_22px_rgba(124,58,237,0.22)] hover:bg-violet-700"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden relative h-11 w-11 rounded-full text-slate-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[rgba(252,251,255,0.96)] backdrop-blur-xl px-6 py-6 space-y-3 border-t border-violet-100 md:px-8 md:py-7">
          <Link
            to="/"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Blog
          </Link>
          <Link
            to="/services"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Services
          </Link>
          <button
            type="button"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
          >
            Products
          </button>
          <Link
            to="/contact"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Contact Us
          </Link>
          <Link
            to="/book-appointment"
            className="block bg-violet-600 text-white px-5 py-3.5 rounded-lg text-center text-lg font-extrabold tracking-[0.01em] whitespace-nowrap md:w-fit md:min-w-[220px]"
            onClick={scrollTop}
          >
            <span className="font-bold">Book Appointment</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
