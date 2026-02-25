// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    // NOMBRE APP (HomeScreen)
    name: 'GGSA Asesores Contables',
    short_name: 'GGSA',
    
    // DESCRIPCIÓN
    description: 'Asesores Contables y Tributarios - Puerto Ordaz, Venezuela',
    
    // URL INICIO
    start_url: '/',
    
    // MODO PWA (standalone = fullscreen)
    display: 'standalone',
    
    // COLORES MARCA
    theme_color: '#044559',      // Barra navegador
    background_color: '#ffffff', // Fondo splash
    
    // ICONOS CHROME MÓVIL (SOLUCIÓN)
    icons: [
      {
        src: '/ggsa2-192.png',
        sizes: '192x192',
        type: 'image/png', // Android adaptativo
      },
      {
        src: '/ggsa2-512.png', 
        sizes: '512x512',
        type: 'image/png',      // PWA HomeScreen
      },
    ],
    
    // ORIENTATION (opcional)
    orientation: 'portrait-primary',
    
    // CATEGORÍA (opcional)
    categories: ['business', 'finance', 'productivity'],
    
    // LANG (opcional)
    lang: 'es-VE',
  }
}
