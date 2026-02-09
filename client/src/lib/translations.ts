// Translations for Villa Bruni website
// Supported languages: ES (Spanish), EN (English), NL (Dutch), DE (German), FR (French)

export type Language = 'es' | 'en' | 'nl' | 'de' | 'fr';

export interface Translations {
  nav: {
    home: string;
    apartment: string;
    location: string;
    amenities: string;
    booking: string;
    gallery: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: {
    title: string;
    bedrooms: string;
    bathrooms: string;
    guests: string;
    size: string;
    pool: string;
    terrace: string;
  };
  location: {
    title: string;
    subtitle: string;
    description: string;
    airports: string;
    barcelona: string;
    reus: string;
    valencia: string;
    nearby: string;
    beach: string;
    pool_area: string;
    priorat: string;
  };
  amenities: {
    title: string;
    wifi: string;
    kitchen: string;
    ac: string;
    parking: string;
    pool: string;
    beach: string;
    petFriendly: string;
  };
  booking: {
    title: string;
    subtitle: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
    note: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    allPhotos: string;
    exterior: string;
    interior: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      apartment: 'Apartamento',
      location: 'Ubicación',
      amenities: 'Servicios',
      booking: 'Reservar',
      gallery: 'Galería',
    },
    hero: {
      title: 'Tu Refugio Mediterráneo',
      subtitle: 'Apartamento de lujo en Bonmont Terres Noves, cerca de las playas de Miami Platja',
      cta: 'Solicitar Reserva',
    },
    about: {
      title: 'Bienvenido a Villa Bruni',
      subtitle: 'Donde el lujo se encuentra con la tranquilidad',
      description: 'Descubre un oasis de elegancia en la urbanización de Bonmont Terres Noves. Villa Bruni ofrece una experiencia única de alquiler vacacional, combinando comodidades modernas con el encanto atemporal del Mediterráneo. Disfruta de un entorno tranquilo, a solo 5 minutos de las hermosas playas de Miami Platja y cerca de la prestigiosa región vinícola del Priorat.',
    },
    features: {
      title: 'Características',
      bedrooms: 'Dormitorios',
      bathrooms: 'Baños',
      guests: 'Huéspedes',
      size: 'Superficie',
      pool: 'Piscina Comunitaria',
      terrace: 'Terraza Privada',
    },
    location: {
      title: 'Ubicación Privilegiada',
      subtitle: 'Bonmont Terres Noves - Costa Dorada',
      description: 'Villa Bruni está ubicada en la exclusiva urbanización de Bonmont Terres Noves, una residencia tranquila. A solo 5 minutos de las hermosas playas de Miami Platja y cerca de la prestigiosa región vinícola del Priorat.',
      airports: 'Cómo Llegar desde los Aeropuertos',
      barcelona: 'Aeropuerto de Barcelona (BCN): 90 minutos en coche',
      reus: 'Aeropuerto de Reus (REU): 45 minutos en coche',
      valencia: 'Aeropuerto de Valencia (VLC): 120 minutos en coche',
      nearby: 'Lugares de Interés Cercanos',
      beach: 'Playas de Miami Platja: 5 minutos',
      pool_area: 'Piscina Comunitaria: En la urbanización',
      priorat: 'Región del Priorat: 30 minutos',
    },
    amenities: {
      title: 'Servicios y Comodidades',
      wifi: 'WiFi de Alta Velocidad',
      kitchen: 'Cocina Totalmente Equipada',
      ac: 'Aire Acondicionado',
      parking: 'Parking Privado',
      pool: 'Acceso a Piscina',
      beach: 'A 5 min de la Playa',
      petFriendly: 'Se Admiten Mascotas',
    },
    booking: {
      title: 'Solicitar Reserva',
      subtitle: 'Revisaremos tu solicitud y te confirmaremos la disponibilidad',
      checkIn: 'Fecha de Entrada',
      checkOut: 'Fecha de Salida',
      guests: 'Número de Huéspedes',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      message: 'Mensaje (opcional)',
      submit: 'Enviar Solicitud',
      success: '¡Solicitud enviada! Te contactaremos pronto para confirmar tu reserva.',
      error: 'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.',
      note: 'Nota: Todas las reservas están sujetas a confirmación por parte del propietario.',
    },
    gallery: {
      title: 'Galería de Fotos',
      subtitle: 'Explora cada rincón de tu próximo refugio mediterráneo',
      allPhotos: 'Todas las Fotos',
      exterior: 'Exterior y Vistas',
      interior: 'Interiores',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
    },
  },
  en: {
    nav: {
      home: 'Home',
      apartment: 'Apartment',
      location: 'Location',
      amenities: 'Amenities',
      booking: 'Book',
      gallery: 'Gallery',
    },
    hero: {
      title: 'Your Mediterranean Retreat',
      subtitle: 'Luxury apartment in Bonmont Terres Noves, near Miami Platja beaches',
      cta: 'Request Booking',
    },
    about: {
      title: 'Welcome to Villa Bruni',
      subtitle: 'Where luxury meets tranquility',
      description: 'Discover an oasis of elegance in the Bonmont Terres Noves urbanization. Villa Bruni offers a unique vacation rental experience, combining modern comforts with the timeless charm of the Mediterranean. Enjoy a peaceful setting, just 5 minutes from the beautiful beaches of Miami Platja and close to the prestigious Priorat wine region.',
    },
    features: {
      title: 'Features',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      guests: 'Guests',
      size: 'Size',
      pool: 'Community Pool',
      terrace: 'Private Terrace',
    },
    location: {
      title: 'Prime Location',
      subtitle: 'Bonmont Terres Noves - Costa Dorada',
      description: 'Villa Bruni is located in the exclusive Bonmont Terres Noves urbanization, a peaceful residence. Just 5 minutes from the beautiful beaches of Miami Platja and close to the prestigious Priorat wine region.',
      airports: 'How to Get Here from Airports',
      barcelona: 'Barcelona Airport (BCN): 90 minutes by car',
      reus: 'Reus Airport (REU): 45 minutes by car',
      valencia: 'Valencia Airport (VLC): 120 minutes by car',
      nearby: 'Nearby Points of Interest',
      beach: 'Miami Platja Beaches: 5 minutes',
      pool_area: 'Community Pool: In the urbanization',
      priorat: 'Priorat Region: 30 minutes',
    },
    amenities: {
      title: 'Services and Amenities',
      wifi: 'High-Speed WiFi',
      kitchen: 'Fully Equipped Kitchen',
      ac: 'Air Conditioning',
      parking: 'Private Parking',
      pool: 'Pool Access',
      beach: '5 min to Beach',
      petFriendly: 'Pet Friendly',
    },
    booking: {
      title: 'Request Booking',
      subtitle: 'We will review your request and confirm availability',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone',
      message: 'Message (optional)',
      submit: 'Send Request',
      success: 'Request sent! We will contact you soon to confirm your booking.',
      error: 'There was an error sending your request. Please try again.',
      note: 'Note: All bookings are subject to owner confirmation.',
    },
    gallery: {
      title: 'Photo Gallery',
      subtitle: 'Explore every corner of your next Mediterranean retreat',
      allPhotos: 'All Photos',
      exterior: 'Exterior and Views',
      interior: 'Interiors',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      apartment: 'Appartement',
      location: 'Locatie',
      amenities: 'Voorzieningen',
      booking: 'Boeken',
      gallery: 'Galerij',
    },
    hero: {
      title: 'Uw Mediterrane Toevluchtsoord',
      subtitle: 'Luxe appartement in Bonmont Terres Noves, nabij de stranden van Miami Platja',
      cta: 'Boeking Aanvragen',
    },
    about: {
      title: 'Welkom bij Villa Bruni',
      subtitle: 'Waar luxe en rust samenkomen',
      description: 'Ontdek een oase van elegantie in de urbanisatie Bonmont Terres Noves. Villa Bruni biedt een unieke vakantieverhuurervaring, waarbij modern comfort wordt gecombineerd met de tijdloze charme van de Middellandse Zee. Geniet van een rustige omgeving, op slechts 5 minuten van de prachtige stranden van Miami Platja en dicht bij de prestigieuze wijnstreek Priorat.',
    },
    features: {
      title: 'Kenmerken',
      bedrooms: 'Slaapkamers',
      bathrooms: 'Badkamers',
      guests: 'Gasten',
      size: 'Oppervlakte',
      pool: 'Gemeenschappelijk Zwembad',
      terrace: 'Privé Terras',
    },
    location: {
      title: 'Toplocatie',
      subtitle: 'Bonmont Terres Noves - Costa Dorada',
      description: 'Villa Bruni bevindt zich in de exclusieve urbanisatie Bonmont Terres Noves, een rustige residentie. Op slechts 5 minuten van de prachtige stranden van Miami Platja en dicht bij de prestigieuze wijnstreek Priorat.',
      airports: 'Hoe te Bereiken vanaf Luchthavens',
      barcelona: 'Luchthaven Barcelona (BCN): 90 minuten met de auto',
      reus: 'Luchthaven Reus (REU): 45 minuten met de auto',
      valencia: 'Luchthaven Valencia (VLC): 120 minuten met de auto',
      nearby: 'Bezienswaardigheden in de Buurt',
      beach: 'Stranden van Miami Platja: 5 minuten',
      pool_area: 'Gemeenschappelijk Zwembad: In de urbanisatie',
      priorat: 'Priorat Regio: 30 minuten',
    },
    amenities: {
      title: 'Diensten en Voorzieningen',
      wifi: 'Snelle WiFi',
      kitchen: 'Volledig Uitgeruste Keuken',
      ac: 'Airconditioning',
      parking: 'Privé Parkeerplaats',
      pool: 'Toegang tot Zwembad',
      beach: '5 min naar Strand',
      petFriendly: 'Huisdiervriendelijk',
    },
    booking: {
      title: 'Boeking Aanvragen',
      subtitle: 'We beoordelen uw aanvraag en bevestigen de beschikbaarheid',
      checkIn: 'Incheckdatum',
      checkOut: 'Uitcheckdatum',
      guests: 'Aantal Gasten',
      name: 'Volledige Naam',
      email: 'E-mailadres',
      phone: 'Telefoon',
      message: 'Bericht (optioneel)',
      submit: 'Aanvraag Verzenden',
      success: 'Aanvraag verzonden! We nemen binnenkort contact met u op om uw boeking te bevestigen.',
      error: 'Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het opnieuw.',
      note: 'Let op: Alle boekingen zijn onder voorbehoud van bevestiging door de eigenaar.',
    },
    gallery: {
      title: 'Fotogalerij',
      subtitle: 'Verken elk hoekje van uw volgende mediterrane toevluchtsoord',
      allPhotos: 'Alle Foto\'s',
      exterior: 'Exterieur en Uitzichten',
      interior: 'Interieurs',
    },
    footer: {
      rights: 'Alle rechten voorbehouden',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      apartment: 'Wohnung',
      location: 'Lage',
      amenities: 'Ausstattung',
      booking: 'Buchen',
      gallery: 'Galerie',
    },
    hero: {
      title: 'Ihr Mediterraner Rückzugsort',
      subtitle: 'Luxuswohnung in Bonmont Terres Noves, in der Nähe der Strände von Miami Platja',
      cta: 'Buchung Anfragen',
    },
    about: {
      title: 'Willkommen in der Villa Bruni',
      subtitle: 'Wo Luxus auf Ruhe trifft',
      description: 'Entdecken Sie eine Oase der Eleganz in der Urbanisation Bonmont Terres Noves. Villa Bruni bietet ein einzigartiges Ferienvermietungserlebnis, das modernen Komfort mit dem zeitlosen Charme des Mittelmeers verbindet. Genießen Sie eine ruhige Umgebung, nur 5 Minuten von den schönen Stränden von Miami Platja entfernt und in der Nähe der prestigeträchtigen Weinregion Priorat.',
    },
    features: {
      title: 'Merkmale',
      bedrooms: 'Schlafzimmer',
      bathrooms: 'Badezimmer',
      guests: 'Gäste',
      size: 'Größe',
      pool: 'Gemeinschaftspool',
      terrace: 'Private Terrasse',
    },
    location: {
      title: 'Erstklassige Lage',
      subtitle: 'Bonmont Terres Noves - Costa Dorada',
      description: 'Villa Bruni befindet sich in der exklusiven Urbanisation Bonmont Terres Noves, einer ruhigen Residenz. Nur 5 Minuten von den schönen Stränden von Miami Platja entfernt und in der Nähe der prestigeträchtigen Weinregion Priorat.',
      airports: 'Anreise von Flughäfen',
      barcelona: 'Flughafen Barcelona (BCN): 90 Minuten mit dem Auto',
      reus: 'Flughafen Reus (REU): 45 Minuten mit dem Auto',
      valencia: 'Flughafen Valencia (VLC): 120 Minuten mit dem Auto',
      nearby: 'Sehenswürdigkeiten in der Nähe',
      beach: 'Strände von Miami Platja: 5 Minuten',
      pool_area: 'Gemeinschaftspool: In der Urbanisation',
      priorat: 'Priorat Region: 30 Minuten',
    },
    amenities: {
      title: 'Dienstleistungen und Ausstattung',
      wifi: 'Highspeed-WLAN',
      kitchen: 'Voll Ausgestattete Küche',
      ac: 'Klimaanlage',
      parking: 'Privater Parkplatz',
      pool: 'Poolzugang',
      beach: '5 Min. zum Strand',
      petFriendly: 'Haustierfreundlich',
    },
    booking: {
      title: 'Buchung Anfragen',
      subtitle: 'Wir prüfen Ihre Anfrage und bestätigen die Verfügbarkeit',
      checkIn: 'Check-in-Datum',
      checkOut: 'Check-out-Datum',
      guests: 'Anzahl der Gäste',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefon',
      message: 'Nachricht (optional)',
      submit: 'Anfrage Senden',
      success: 'Anfrage gesendet! Wir werden uns bald mit Ihnen in Verbindung setzen, um Ihre Buchung zu bestätigen.',
      error: 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      note: 'Hinweis: Alle Buchungen unterliegen der Bestätigung durch den Eigentümer.',
    },
    gallery: {
      title: 'Fotogalerie',
      subtitle: 'Erkunden Sie jede Ecke Ihres nächsten mediterranen Rückzugsortes',
      allPhotos: 'Alle Fotos',
      exterior: 'Außenbereich und Aussichten',
      interior: 'Innenräume',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Allgemeine Geschäftsbedingungen',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      apartment: 'Appartement',
      location: 'Emplacement',
      amenities: 'Équipements',
      booking: 'Réserver',
      gallery: 'Galerie',
    },
    hero: {
      title: 'Votre Refuge Méditerranéen',
      subtitle: 'Appartement de luxe à Bonmont Terres Noves, près des plages de Miami Platja',
      cta: 'Demander une Réservation',
    },
    about: {
      title: 'Bienvenue à Villa Bruni',
      subtitle: 'Où le luxe rencontre la tranquillité',
      description: 'Découvrez une oasis d\'\u00e9légance dans l\'urbanisation de Bonmont Terres Noves. Villa Bruni offre une expérience de location de vacances unique, alliant confort moderne et charme intemporel de la Méditerranée. Profitez d\'un cadre paisible, à seulement 5 minutes des belles plages de Miami Platja et près de la prestigieuse région viticole du Priorat.',
    },
    features: {
      title: 'Caractéristiques',
      bedrooms: 'Chambres',
      bathrooms: 'Salles de Bain',
      guests: 'Invités',
      size: 'Surface',
      pool: 'Piscine Commune',
      terrace: 'Terrasse Privée',
    },
    location: {
      title: 'Emplacement de Choix',
      subtitle: 'Bonmont Terres Noves - Costa Dorada',
      description: 'Villa Bruni est située dans l\'urbanisation exclusive de Bonmont Terres Noves, une résidence paisible. À seulement 5 minutes des belles plages de Miami Platja et près de la prestigieuse région viticole du Priorat.',
      airports: 'Comment Arriver depuis les Aéroports',
      barcelona: 'Aéroport de Barcelone (BCN) : 90 minutes en voiture',
      reus: 'Aéroport de Reus (REU) : 45 minutes en voiture',
      valencia: 'Aéroport de Valence (VLC) : 120 minutes en voiture',
      nearby: 'Points d\'Intérêt à Proximité',
      beach: 'Plages de Miami Platja : 5 minutes',
       pool_area: 'Piscine Commune : Dans l’urbanisation',
      priorat: 'Région du Priorat : 30 minutes',
    },
    amenities: {
      title: 'Services et Équipements',
      wifi: 'WiFi Haut Débit',
      kitchen: 'Cuisine Entièrement Équipée',
      ac: 'Climatisation',
      parking: 'Parking Privé',
      pool: 'Accès Piscine',
      beach: '5 min de la Plage',
      petFriendly: 'Animaux Acceptés',
    },
    booking: {
      title: 'Demander une Réservation',
      subtitle: 'Nous examinerons votre demande et confirmerons la disponibilité',
      checkIn: 'Date d\'Arrivée',
      checkOut: 'Date de Départ',
      guests: 'Nombre d\'Invités',
      name: 'Nom Complet',
      email: 'Adresse E-mail',
      phone: 'Téléphone',
      message: 'Message (optionnel)',
      submit: 'Envoyer la Demande',
      success: 'Demande envoyée ! Nous vous contacterons bientôt pour confirmer votre réservation.',
      error: 'Une erreur s\'est produite lors de l\'envoi de votre demande. Veuillez réessayer.',
      note: 'Remarque : Toutes les réservations sont soumises à la confirmation du propriétaire.',
    },
    gallery: {
      title: 'Galerie de Photos',
      subtitle: 'Explorez chaque recoin de votre prochain refuge méditerranéen',
      allPhotos: 'Toutes les Photos',
      exterior: 'Extérieur et Vues',
      interior: 'Intérieurs',
    },
    footer: {
      rights: 'Tous droits réservés',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions Générales',
    },
  },
};

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
  fr: 'Français',
};
