# Villa Bruni - Sitio Web de Alquiler de Apartamento

Sitio web profesional y elegante para el alquiler de apartamento de verano Villa Bruni en la costa mediterránea española.

## Características Principales

### ✨ Diseño
- **Filosofía de Diseño**: Lujo Mediterráneo Sensorial
- **Estética**: Editorial de alta gama inspirada en revistas de arquitectura
- **Paleta de Colores**: Crema cálido, verde oliva, dorado antiguo, terracota
- **Tipografía**: 
  - Playfair Display (títulos)
  - Source Sans Pro (texto)
  - Montserrat (subtítulos)

### 🌍 Multiidioma
Soporte completo para 5 idiomas:
- 🇪🇸 Español
- 🇬🇧 English
- 🇳🇱 Nederlands
- 🇩🇪 Deutsch
- 🇫🇷 Français

El idioma se detecta automáticamente según el navegador del usuario y se guarda en localStorage.

### 📱 Secciones del Sitio

1. **Hero Section**
   - Imagen a pantalla completa con animación de zoom
   - Título impactante con overlay de gradiente
   - CTA prominente para reservar

2. **Apartamento**
   - Descripción detallada del apartamento
   - Características principales (3 dormitorios, 2 baños, 6 huéspedes, 120m²)
   - Galería de imágenes de alta calidad
   - Vistas al mar y terraza privada

3. **Ubicación**
   - Información sobre la ubicación privilegiada
   - Distancias y tiempos desde aeropuertos:
     - Barcelona (BCN): 90 minutos
     - Reus (REU): 45 minutos
     - Valencia (VLC): 120 minutos
   - Imagen panorámica de la costa

4. **Servicios y Comodidades**
   - WiFi de alta velocidad
   - Cocina totalmente equipada
   - Aire acondicionado
   - Parking privado
   - Acceso a piscina
   - 5 minutos a la playa

5. **Formulario de Reserva**
   - Sistema de solicitud de reserva (no confirmación automática)
   - Campos: fechas, número de huéspedes, datos de contacto
   - Validación de formulario
   - Nota clara: "Todas las reservas están sujetas a confirmación por parte del propietario"

6. **Galería de Fotos**
   - Página dedicada accesible desde el menú de navegación
   - Organización por categorías (Exterior, Interior, etc.)
   - Visor lightbox en pantalla completa
   - Navegación con teclado y flechas
   - Sistema fácil de actualización de fotos (ver GUIA_ACTUALIZACION_FOTOS.md)

### 🎨 Recursos Visuales

El sitio incluye 5 imágenes generadas con IA de alta calidad:
- `hero-villa-bruni.png` - Terraza con vistas al mar al atardecer
- `interior-living-room.png` - Sala de estar elegante
- `bedroom-suite.png` - Suite principal con decoración mediterránea
- `coastal-location.png` - Vista aérea de la costa
- `amenities-pool.png` - Área de piscina infinity

Además, se incluyen 8 imágenes de referencia de búsqueda para complementar el contenido.

### 🎭 Animaciones y Efectos

- Animación de zoom-out en el hero
- Fade-in con desplazamiento vertical al hacer scroll
- Hover effects en tarjetas con elevación
- Transiciones cinematográficas (400ms cubic-bezier)
- Scroll suave entre secciones

### 🧭 Navegación

- Navegación fija con efecto de backdrop blur al hacer scroll
- Línea decorativa dorada como separador
- Menú responsive para móvil
- Selector de idioma integrado
- Scroll suave a secciones

### 📋 Flujo de Reservas

El sistema está diseñado para que **revises las reservas antes de confirmarlas**:

1. Usuario completa el formulario con fechas y datos
2. Se envía una solicitud (actualmente simulada en consola)
3. Mensaje de confirmación: "¡Solicitud enviada! Te contactaremos pronto para confirmar tu reserva."
4. El propietario revisa la solicitud manualmente
5. Se confirma o rechaza según disponibilidad y coordinación con la agencia

**Nota**: En producción, necesitarás implementar el backend para recibir estas solicitudes por email o guardarlas en una base de datos.

## Tecnologías Utilizadas

- **Framework**: React 19 con TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Iconos**: Lucide React
- **Notificaciones**: Sonner
- **Animaciones**: CSS custom animations + Tailwind

## Estructura del Proyecto

```
villabruni/
├── client/
│   ├── public/
│   │   └── images/          # Imágenes del sitio
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   │   ├── Navigation.tsx
│   │   │   ├── LanguageSelector.tsx
│   │   │   └── ui/          # Componentes shadcn/ui
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── lib/
│   │   │   └── translations.ts  # Traducciones multiidioma
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Página principal
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css        # Estilos globales y tema
│   └── index.html
├── ideas.md                 # Documento de diseño
└── README.md               # Este archivo
```

## Próximos Pasos Recomendados

### Para Implementar el Sistema de Reservas Real:

1. **Backend para Formulario**:
   - Configurar endpoint para recibir solicitudes
   - Enviar emails de notificación al propietario
   - Opcional: guardar en base de datos para historial

2. **Calendario de Disponibilidad**:
   - Integrar calendario visual
   - Sincronizar con la agencia para evitar doble reserva
   - Bloquear fechas ya reservadas

3. **Integración con Agencia**:
   - API o sincronización manual de reservas
   - Sistema para marcar fechas como "pendiente de confirmación"

4. **Mejoras Adicionales**:
   - Sistema de precios por temporada
   - Galería de fotos expandible
   - Testimonios de huéspedes anteriores
   - Blog o guía de la zona
   - Integración con Google Maps para ubicación exacta

## Despliegue

El sitio está listo para ser desplegado. Para publicarlo:

1. Crea un checkpoint desde la interfaz de Manus
2. Haz clic en el botón "Publish" en el panel de gestión
3. Configura tu dominio personalizado (www.villabruni.es) en Settings > Domains

## Contacto y Soporte

Para cualquier modificación o pregunta sobre el sitio, contacta al desarrollador o consulta la documentación de Manus.

---

**Villa Bruni** - Tu refugio mediterráneo 🌊
