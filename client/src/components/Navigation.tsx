/*
  Design Philosophy: Lujo Mediterráneo Sensorial
  - Transparent navigation with elegant backdrop blur on scroll
  - Gold accent line separator
  - Montserrat font for navigation items
*/

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location !== '/') {
      setLocation('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t.nav.home, isRoute: false },
    { id: 'apartment', label: t.nav.apartment, isRoute: false },
    { id: 'location', label: t.nav.location, isRoute: false },
    { id: 'amenities', label: t.nav.amenities, isRoute: false },
    { id: 'booking', label: t.nav.booking, isRoute: false },
  ];

  const routeLinks = [
    { path: '/gallery', label: t.nav.gallery },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => {
              setLocation('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-bold tracking-tight cursor-pointer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Villa Bruni
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="subheading text-xs text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            {routeLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button className="subheading text-xs text-foreground/80 hover:text-foreground transition-colors">
                  {link.label}
                </button>
              </Link>
            ))}
            <div className="h-6 w-px bg-border" />
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="subheading text-sm text-foreground/80 hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              {routeLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="subheading text-sm text-foreground/80 hover:text-foreground transition-colors text-left w-full"
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gold accent line */}
      {isScrolled && (
        <div
          className="h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(0.65 0.08 75), transparent)',
          }}
        />
      )}
    </nav>
  );
}
