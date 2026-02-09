/*
  Design Philosophy: Lujo Mediterráneo Sensorial
  - Full-screen gallery with elegant grid layout
  - Lightbox modal for viewing images in detail
  - Organized by categories (exterior, living, kitchen, bedrooms, bathrooms, nearby)
*/

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

// Gallery images configuration
// TO UPDATE IMAGES: Simply replace the image files in /client/public/images/
// and update the filenames in this array
const galleryImages = {
  exterior: [
    { src: '/images/IMG_3399.jpg', alt: 'Piscina comunitaria' },
    { src: '/images/IMG_4404.jpeg', alt: 'Terraza con vistas' },
    { src: '/images/IMG_4371.jpeg', alt: 'Terraza con barbacoa' },
  ],
  living: [
    { src: '/images/IMG_3200.jpeg', alt: 'Salón' },
    { src: '/images/IMG_3208.jpeg', alt: 'Salón vista 2' },
    { src: '/images/IMG_4376.jpeg', alt: 'Salón vista 3' },
  ],
  kitchen: [
    { src: '/images/cocina.jpg', alt: 'Cocina equipada' },
    { src: '/images/IMG_4403.jpeg', alt: 'Cocina vista 2' },
  ],
  bedrooms: [
    { src: '/images/IMG_3278.jpeg', alt: 'Dormitorio' },
    { src: '/images/IMG_3285.jpeg', alt: 'Dormitorio 2' },
    { src: '/images/IMG_3288.jpeg', alt: 'Dormitorio 3' },
  ],
  bathrooms: [
    { src: '/images/IMG_3282.jpeg', alt: 'Baño' },
    { src: '/images/IMG_3283.jpeg', alt: 'Baño 2' },
  ],
  nearby: [
    { src: '/images/IMG_3400.jpg', alt: 'Playa de Miami Platja' },
    { src: '/images/IMG_3401.JPG', alt: 'Región del Priorat' },
  ],
};

export default function Gallery() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Read category from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && ['exterior', 'living', 'kitchen', 'bedrooms', 'bathrooms', 'nearby'].includes(category)) {
      setSelectedCategory(category);
    }
  }, [location]);

  // Flatten all images for lightbox navigation
  const allImages = Object.values(galleryImages).flat();

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < allImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  // Filter images by category
  const displayImages =
    selectedCategory === 'all'
      ? allImages
      : galleryImages[selectedCategory as keyof typeof galleryImages] || [];

  // Category labels
  const categoryLabels: Record<string, Record<string, string>> = {
    all: {
      es: 'Todas las Fotos',
      en: 'All Photos',
      nl: 'Alle Foto\'s',
      de: 'Alle Fotos',
      fr: 'Toutes les Photos',
    },
    exterior: {
      es: 'Exterior',
      en: 'Exterior',
      nl: 'Exterieur',
      de: 'Außenbereich',
      fr: 'Extérieur',
    },
    living: {
      es: 'Salón',
      en: 'Living Room',
      nl: 'Woonkamer',
      de: 'Wohnzimmer',
      fr: 'Salon',
    },
    kitchen: {
      es: 'Cocina',
      en: 'Kitchen',
      nl: 'Keuken',
      de: 'Küche',
      fr: 'Cuisine',
    },
    bedrooms: {
      es: 'Dormitorios',
      en: 'Bedrooms',
      nl: 'Slaapkamers',
      de: 'Schlafzimmer',
      fr: 'Chambres',
    },
    bathrooms: {
      es: 'Baños',
      en: 'Bathrooms',
      nl: 'Badkamers',
      de: 'Badezimmer',
      fr: 'Salles de Bain',
    },
    nearby: {
      es: 'Lugares Cercanos',
      en: 'Nearby Places',
      nl: 'Nabijgelegen Plaatsen',
      de: 'Nahegelegene Orte',
      fr: 'Lieux à Proximité',
    },
  };

  const getCategoryLabel = (category: string, lang: string) => {
    return categoryLabels[category]?.[lang] || category;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container text-center">
          <p className="subheading text-primary mb-4">{t.gallery.title.toUpperCase()}</p>
          <h1 className="mb-6">Villa Bruni</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(categoryLabels).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="font-semibold"
              >
                {getCategoryLabel(category, t.nav.home === 'Inicio' ? 'es' : t.nav.home === 'Home' && t.nav.apartment === 'Apartment' ? 'en' : t.nav.home === 'Home' && t.nav.apartment === 'Appartement' && t.nav.location === 'Locatie' ? 'nl' : t.nav.home === 'Startseite' ? 'de' : 'fr')}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-[4/3]"
                onClick={() => setSelectedImage(allImages.indexOf(image))}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[selectedImage].src}
              alt={allImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          {selectedImage < allImages.length - 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
