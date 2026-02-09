# Guía para Actualizar las Fotos de Villa Bruni

Esta guía te explica cómo añadir, modificar o eliminar fotos en tu sitio web de Villa Bruni de forma sencilla.

---

## Acceso a la Galería de Fotos

La galería de fotos está disponible en una página dedicada accesible desde el menú de navegación principal. Los visitantes pueden hacer clic en **"Galería"** para ver todas las fotos organizadas por categorías.

### Características de la Galería

La página de galería incluye funcionalidades profesionales que mejoran la experiencia del usuario. Las fotos están organizadas en categorías como **Exterior y Vistas** e **Interiores**, lo que facilita la navegación. Los visitantes pueden filtrar las imágenes según sus intereses utilizando botones de categoría en la parte superior de la página.

Cuando un usuario hace clic en cualquier foto, se abre un visor en pantalla completa (lightbox) que permite ver la imagen en detalle. Este visor incluye navegación con flechas para moverse entre fotos, contador de posición para saber cuántas imágenes hay en total, y soporte para teclado mediante las teclas de flecha izquierda y derecha para navegar, y la tecla Escape para cerrar el visor.

---

## Método 1: Actualizar Fotos desde la Interfaz de Manus (Recomendado)

Este es el método más sencillo y no requiere conocimientos técnicos.

### Paso 1: Acceder al Panel de Gestión

Abre tu proyecto Villa Bruni en Manus y haz clic en el icono de gestión en la esquina superior derecha para abrir el panel lateral. Selecciona la pestaña **"Code"** para ver todos los archivos del proyecto.

### Paso 2: Navegar a la Carpeta de Imágenes

En el árbol de archivos, navega hasta la carpeta donde se almacenan las imágenes de la galería:

```
client → public → images → gallery
```

Esta carpeta es donde debes colocar todas las fotos nuevas que quieras mostrar en la galería.

### Paso 3: Subir Nuevas Fotos

Haz clic derecho en la carpeta `gallery` y selecciona la opción para subir archivos. Puedes subir múltiples fotos a la vez. Los formatos de imagen compatibles son **JPG**, **JPEG**, **PNG** y **WEBP**.

**Recomendaciones para las fotos:**

- **Resolución**: Entre 1920x1080 y 2560x1440 píxeles para calidad óptima
- **Tamaño de archivo**: Menos de 2 MB por imagen para carga rápida
- **Formato**: JPG o WEBP para mejor compresión
- **Nombres de archivo**: Usa nombres descriptivos sin espacios ni caracteres especiales (ejemplo: `terraza-puesta-sol.jpg`, `cocina-moderna.jpg`)

### Paso 4: Actualizar el Código de la Galería

Después de subir las fotos, necesitas indicarle al sitio web qué imágenes mostrar. En el panel de código, abre el archivo:

```
client → src → pages → Gallery.tsx
```

Busca la sección que dice `const galleryImages = {` (aproximadamente en la línea 15-25). Verás una estructura como esta:

```typescript
const galleryImages = {
  exterior: [
    { src: '/images/hero-villa-bruni.png', alt: 'Terraza con vistas al mar' },
    { src: '/images/amenities-pool.png', alt: 'Área de piscina' },
  ],
  interior: [
    { src: '/images/interior-living-room.png', alt: 'Sala de estar' },
    { src: '/images/bedroom-suite.png', alt: 'Dormitorio principal' },
  ],
};
```

Para añadir tus nuevas fotos, simplemente agrega líneas siguiendo el mismo formato. Por ejemplo, si subiste fotos de la cocina y el baño:

```typescript
const galleryImages = {
  exterior: [
    { src: '/images/gallery/terraza-puesta-sol.jpg', alt: 'Terraza al atardecer' },
    { src: '/images/gallery/piscina-vista-mar.jpg', alt: 'Piscina con vistas' },
    { src: '/images/gallery/jardin-exterior.jpg', alt: 'Jardín y zona exterior' },
  ],
  interior: [
    { src: '/images/gallery/cocina-moderna.jpg', alt: 'Cocina totalmente equipada' },
    { src: '/images/gallery/salon-principal.jpg', alt: 'Salón con vistas al mar' },
    { src: '/images/gallery/dormitorio-master.jpg', alt: 'Dormitorio principal' },
    { src: '/images/gallery/bano-suite.jpg', alt: 'Baño en suite' },
  ],
};
```

**Importante:** El campo `src` debe coincidir exactamente con el nombre del archivo que subiste, y el campo `alt` debe ser una descripción breve de la foto para accesibilidad.

### Paso 5: Guardar y Verificar

Guarda los cambios en el archivo `Gallery.tsx`. El sitio web se actualizará automáticamente. Abre la página de galería en el preview para verificar que las fotos se muestran correctamente.

---

## Método 2: Actualizar Fotos Descargando el Código

Si prefieres trabajar con los archivos en tu ordenador, puedes descargar el código completo del proyecto.

### Paso 1: Descargar el Proyecto

En el panel de gestión de Manus, ve a la pestaña **"Code"** y haz clic en el botón **"Download All Files"** en la parte superior. Esto descargará un archivo ZIP con todo el código del proyecto.

### Paso 2: Extraer y Organizar las Fotos

Extrae el archivo ZIP en tu ordenador. Navega hasta la carpeta:

```
villabruni/client/public/images/gallery/
```

Copia todas tus fotos nuevas en esta carpeta. Asegúrate de que los nombres de archivo sean descriptivos y no contengan espacios ni caracteres especiales.

### Paso 3: Editar el Archivo de Galería

Abre el archivo `villabruni/client/src/pages/Gallery.tsx` con cualquier editor de texto (Notepad++, Visual Studio Code, Sublime Text, etc.).

Busca la sección `const galleryImages = {` y actualiza las rutas de las imágenes siguiendo el formato explicado en el Método 1.

### Paso 4: Volver a Subir el Proyecto

Una vez que hayas actualizado las fotos y el código, puedes volver a subir los archivos modificados a Manus:

1. Comprime la carpeta del proyecto en un archivo ZIP
2. En Manus, usa la opción de importar proyecto o sube los archivos modificados individualmente

---

## Añadir Nuevas Categorías

Si quieres organizar las fotos en más categorías (por ejemplo, "Vistas", "Amenidades", "Dormitorios"), puedes hacerlo fácilmente.

### Paso 1: Añadir la Categoría en el Código

En el archivo `Gallery.tsx`, añade una nueva categoría en el objeto `galleryImages`:

```typescript
const galleryImages = {
  exterior: [
    // ... fotos existentes
  ],
  interior: [
    // ... fotos existentes
  ],
  vistas: [
    { src: '/images/gallery/vista-amanecer.jpg', alt: 'Amanecer desde la terraza' },
    { src: '/images/gallery/vista-nocturna.jpg', alt: 'Vista nocturna del mar' },
  ],
  amenidades: [
    { src: '/images/gallery/gimnasio.jpg', alt: 'Gimnasio del complejo' },
    { src: '/images/gallery/spa.jpg', alt: 'Zona de spa' },
  ],
};
```

### Paso 2: Añadir el Botón de Filtro

Busca la sección de botones de categoría (alrededor de la línea 70-90) y añade un nuevo botón:

```typescript
<Button
  variant={selectedCategory === 'vistas' ? 'default' : 'outline'}
  onClick={() => setSelectedCategory('vistas')}
  className="font-semibold"
>
  Vistas Panorámicas
</Button>
```

Repite este paso para cada categoría nueva que quieras añadir.

---

## Eliminar o Reemplazar Fotos

### Para Eliminar una Foto

Simplemente elimina la línea correspondiente en el objeto `galleryImages` del archivo `Gallery.tsx`. Por ejemplo, si quieres eliminar la foto de la piscina:

```typescript
// ANTES
exterior: [
  { src: '/images/gallery/terraza.jpg', alt: 'Terraza' },
  { src: '/images/gallery/piscina.jpg', alt: 'Piscina' }, // ← Eliminar esta línea
  { src: '/images/gallery/jardin.jpg', alt: 'Jardín' },
],

// DESPUÉS
exterior: [
  { src: '/images/gallery/terraza.jpg', alt: 'Terraza' },
  { src: '/images/gallery/jardin.jpg', alt: 'Jardín' },
],
```

### Para Reemplazar una Foto

Puedes subir la nueva foto con el mismo nombre que la anterior, y el sitio web la reemplazará automáticamente. Alternativamente, sube la foto con un nombre nuevo y actualiza la ruta en `Gallery.tsx`.

---

## Optimización de Imágenes (Opcional pero Recomendado)

Para que tu sitio web cargue más rápido, es recomendable optimizar las fotos antes de subirlas.

### Herramientas Recomendadas

Existen varias herramientas gratuitas que puedes usar para comprimir y optimizar tus fotos sin perder calidad visible. **TinyPNG** (https://tinypng.com) es una herramienta web gratuita que comprime imágenes JPG y PNG de forma automática. **Squoosh** (https://squoosh.app) es una herramienta de Google que permite ajustar la calidad y el formato de las imágenes. **ImageOptim** (solo para Mac) es una aplicación de escritorio que optimiza imágenes arrastrándolas a la ventana.

### Consejos de Optimización

Para obtener los mejores resultados, reduce la resolución de las fotos a un máximo de 2560 píxeles en el lado más largo. Convierte las imágenes a formato WEBP cuando sea posible, ya que ofrece mejor compresión que JPG. Ajusta la calidad de compresión entre 80-85%, que es un buen equilibrio entre tamaño y calidad. Finalmente, elimina los metadatos EXIF de las fotos para reducir el tamaño del archivo.

---

## Solución de Problemas Comunes

### Las fotos no se muestran en la galería

Verifica que el nombre del archivo en `Gallery.tsx` coincida exactamente con el nombre del archivo subido, incluyendo mayúsculas y minúsculas. Asegúrate de que las fotos estén en la carpeta correcta (`client/public/images/gallery/`). Comprueba que la ruta comience con `/images/gallery/` y no con `images/gallery/` (la barra inicial es importante).

### Las fotos se ven pixeladas o borrosas

Esto indica que la resolución de la imagen es demasiado baja. Sube fotos con una resolución mínima de 1920x1080 píxeles. Si las fotos originales son de alta calidad, evita comprimirlas demasiado.

### El sitio web tarda mucho en cargar

Esto suele ocurrir cuando las fotos son demasiado grandes. Optimiza las imágenes siguiendo las recomendaciones de la sección "Optimización de Imágenes". Reduce el tamaño de archivo de cada foto a menos de 2 MB. Considera convertir las fotos a formato WEBP para mejor compresión.

### No puedo ver los cambios después de actualizar las fotos

El navegador puede estar mostrando una versión en caché del sitio. Intenta refrescar la página con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac) para forzar la recarga. Si aún no ves los cambios, espera unos minutos y vuelve a intentarlo.

---

## Resumen Rápido

Para actualizar las fotos de tu galería de forma rápida, sigue estos pasos esenciales. Primero, sube tus fotos a la carpeta `client/public/images/gallery/` usando el panel de gestión de Manus. Segundo, abre el archivo `client/src/pages/Gallery.tsx` y añade las rutas de las nuevas fotos en el objeto `galleryImages`. Tercero, guarda los cambios y verifica que las fotos se muestran correctamente en la página de galería.

Recuerda usar nombres de archivo descriptivos sin espacios, optimizar las fotos antes de subirlas para mejorar la velocidad de carga, y añadir descripciones claras en el campo `alt` para accesibilidad.

---

## Contacto y Soporte

Si tienes alguna duda o necesitas ayuda para actualizar las fotos, puedes consultar la documentación de Manus o contactar con el soporte técnico. También puedes solicitar asistencia para añadir funcionalidades adicionales a la galería, como categorías automáticas, carga masiva de fotos, o integración con servicios de almacenamiento en la nube.

---

**Última actualización:** Enero 2026  
**Versión del sitio:** 1.0
