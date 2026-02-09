/*
  Design Philosophy: Lujo Mediterráneo Sensorial
  - Hero with full-screen image and zoom-out animation
  - Editorial layouts with asymmetric sections
  - Warm Mediterranean color palette
  - Cinematic scroll-triggered animations
*/

import { useEffect, useRef, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapView } from '@/components/Map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Link } from 'wouter';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Bed,
  Bath,
  Users,
  Maximize,
  Eye,
  Palmtree,
  Wifi,
  UtensilsCrossed,
  Wind,
  Car,
  Waves,
  MapPin,
  Plane,
  Calendar,
  Mail,
  Phone,
  User,
  MessageSquare,
  Dog,
} from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    setIsHeroVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.checkIn || !formData.checkOut || !formData.name || !formData.email) {
      toast.error(t.booking.error);
      return;
    }

    // Simulate form submission (in production, this would send to a backend)
    console.log('Booking request:', formData);
    toast.success(t.booking.success);

    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: '2',
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background Image with Zoom Animation */}
        <div
          className={`absolute inset-0 ${isHeroVisible ? 'animate-zoom-out' : ''}`}
          style={{
            backgroundImage: 'url(/images/hero-villa-bruni.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <div
                className={`space-y-6 ${isHeroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                <p className="subheading text-white/90">
                  {t.hero.subtitle}
                </p>
                <h1 className="text-white drop-shadow-lg">
                  {t.hero.title}
                </h1>
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('booking');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg"
                >
                  {t.hero.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apartment" className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-on-scroll opacity-0">
              <p className="subheading text-primary">
                {t.about.subtitle}
              </p>
              <h2 className="text-foreground">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>

            {/* Features Grid - Now in its own column */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">3</p>
                    <p className="text-sm text-muted-foreground">{t.features.bedrooms}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bath className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">2</p>
                    <p className="text-sm text-muted-foreground">{t.features.bathrooms}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">6</p>
                    <p className="text-sm text-muted-foreground">{t.features.guests}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Maximize className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">120m²</p>
                    <p className="text-sm text-muted-foreground">{t.features.size}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Gallery Categories Carousel */}
          <div className="mt-20 animate-on-scroll opacity-0">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif text-foreground mb-3">
                {language === 'es' ? 'Explora Villa Bruni' : language === 'en' ? 'Explore Villa Bruni' : language === 'nl' ? 'Ontdek Villa Bruni' : language === 'de' ? 'Entdecken Sie Villa Bruni' : 'Découvrez Villa Bruni'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'es' ? 'Descubre cada espacio de tu próximo refugio mediterráneo' : language === 'en' ? 'Discover every space of your next Mediterranean retreat' : language === 'nl' ? 'Ontdek elke ruimte van uw volgende mediterrane toevluchtsoord' : language === 'de' ? 'Entdecken Sie jeden Raum Ihres nächsten mediterranen Rückzugsortes' : 'Découvrez chaque espace de votre prochain refuge méditerranéen'}
              </p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { category: 'exterior', image: '/images/IMG_3399.jpg', label: { es: 'Exterior', en: 'Exterior', nl: 'Exterieur', de: 'Außenbereich', fr: 'Extérieur' } },
                  { category: 'living', image: '/images/IMG_3200.jpeg', label: { es: 'Salón', en: 'Living Room', nl: 'Woonkamer', de: 'Wohnzimmer', fr: 'Salon' } },
                  { category: 'kitchen', image: '/images/cocina.jpg', label: { es: 'Cocina', en: 'Kitchen', nl: 'Keuken', de: 'Küche', fr: 'Cuisine' } },
                  { category: 'bedrooms', image: '/images/IMG_3278.jpeg', label: { es: 'Dormitorios', en: 'Bedrooms', nl: 'Slaapkamers', de: 'Schlafzimmer', fr: 'Chambres' } },
                  { category: 'bathrooms', image: '/images/IMG_3282.jpeg', label: { es: 'Baños', en: 'Bathrooms', nl: 'Badkamers', de: 'Badezimmer', fr: 'Salles de Bain' } },
                  { category: 'nearby', image: '/images/IMG_3400.jpg', label: { es: 'Lugares Cercanos', en: 'Nearby Places', nl: 'Nabijgelegen Plaatsen', de: 'Nahegelegene Orte', fr: 'Lieux à Proximité' } },
                ].map((item) => (
                  <CarouselItem key={item.category} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/gallery?category=${item.category}`}>
                      <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer h-[400px]">
                        <img
                          src={item.image}
                          alt={item.label.es}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90">
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                            <h4 className="text-white text-2xl font-serif mb-2">
                              {item.label[language as keyof typeof item.label]}
                            </h4>
                            <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {language === 'es' ? 'Ver galería completa' : language === 'en' ? 'View full gallery' : language === 'nl' ? 'Bekijk volledige galerij' : language === 'de' ? 'Vollständige Galerie ansehen' : 'Voir la galerie complète'} →
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="-right-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <p className="subheading text-primary mb-4">
              {t.location.subtitle}
            </p>
            <h2 className="mb-6">{t.location.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.location.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Map */}
            <div className="animate-on-scroll opacity-0">
              <MapView
                className="rounded-lg shadow-2xl h-[500px] w-full"
                initialCenter={{ lat: 41.0394, lng: 0.9246 }}
                initialZoom={14}
                onMapReady={(map) => {
                  // Add marker for Villa Bruni at Bonmont Terres Noves
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: 41.0394, lng: 0.9246 },
                    title: 'Villa Bruni - Bonmont Terres Noves',
                  });
                }}
              />
            </div>

            {/* Airport Information */}
            <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-8">{t.location.airports}</h3>

              <Card className="p-6 card-luxury">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Barcelona (BCN)</p>
                    <p className="text-muted-foreground">{t.location.barcelona}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-luxury">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Reus (REU)</p>
                    <p className="text-muted-foreground">{t.location.reus}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-luxury">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Valencia (VLC)</p>
                    <p className="text-muted-foreground">{t.location.valencia}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Nearby Points of Interest */}
          <div className="mt-16 animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-8 text-center">{t.location.nearby}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 card-luxury text-center group hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">{t.location.beach}</h4>
              </Card>
              <Card className="p-8 card-luxury text-center group hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="10" width="20" height="10" rx="2" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 10V8a2 2 0 012-2h8a2 2 0 012 2v2" />
                    <line x1="2" y1="15" x2="22" y2="15" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">{t.location.pool_area}</h4>
              </Card>
              <Card className="p-8 card-luxury text-center group hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 21h8M12 3v3m0 0c-1.5 0-2.5 1-2.5 2.5V12c0 2 1 3 2.5 3s2.5-1 2.5-3V8.5C14.5 7 13.5 6 12 6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 12c0 2.5 1 4.5 2.5 4.5s2.5-2 2.5-4.5" />
                    <ellipse cx="12" cy="18" rx="4" ry="3" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">{t.location.priorat}</h4>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="mb-6">{t.amenities.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0">
            {[
              { icon: Wifi, label: t.amenities.wifi },
              { icon: UtensilsCrossed, label: t.amenities.kitchen },
              { icon: Wind, label: t.amenities.ac },
              { icon: Car, label: t.amenities.parking },
              { icon: Waves, label: t.amenities.pool },
              { icon: MapPin, label: t.amenities.beach },
              { icon: Dog, label: t.amenities.petFriendly },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="p-8 card-luxury text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-lg">{amenity.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="mb-4">{t.booking.title}</h2>
            <p className="text-lg text-muted-foreground">{t.booking.subtitle}</p>
          </div>

          <Card className="p-8 md:p-12 card-luxury animate-on-scroll opacity-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dates and Guests */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {t.booking.checkIn}
                  </Label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOut" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {t.booking.checkOut}
                  </Label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    {t.booking.guests}
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="6"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t.booking.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {t.booking.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {t.booking.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t.booking.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="resize-none"
                />
              </div>

              {/* Note */}
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  {t.booking.note}
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
              >
                {t.booking.submit}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Villa Bruni
            </h3>
            <p className="text-background/70">
              © {new Date().getFullYear()} Villa Bruni. {t.footer.rights}
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <button className="text-background/70 hover:text-background transition-colors">
                {t.footer.privacy}
              </button>
              <span className="text-background/30">|</span>
              <button className="text-background/70 hover:text-background transition-colors">
                {t.footer.terms}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
