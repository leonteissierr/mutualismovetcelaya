# MutualismoVet

Sitio web institucional para una clínica veterinaria, construido con **Next.js 16**, **React 19** y **TypeScript**.

## Stack tecnológico

- [Next.js 16](https://nextjs.org) — framework de React con App Router
- React 19
- TypeScript
- CSS global con soporte para dark mode

## Estructura del proyecto

```
mutualismovet/
├── app/
│   ├── layout.tsx        # Layout raíz (fuentes, metadata)
│   ├── page.tsx          # Página principal (composición de secciones)
│   └── globals.css       # Estilos globales
├── components/
│   ├── Nav.tsx           # Barra de navegación
│   ├── Hero.tsx          # Sección hero / portada
│   ├── Servicios.tsx     # Servicios ofrecidos
│   ├── Productos.tsx     # Productos disponibles
│   ├── Marcas.tsx        # Marcas aliadas
│   ├── Pension.tsx       # Servicio de pensión/hospedaje
│   ├── Nosotros.tsx      # Quiénes somos
│   ├── Diferenciadores.tsx # Por qué elegirnos
│   ├── Testimonios.tsx   # Testimonios de clientes
│   ├── Galeria.tsx       # Galería de imágenes
│   ├── FAQ.tsx           # Preguntas frecuentes
│   ├── Agenda.tsx        # Sistema de agendamiento
│   ├── Calculadora.tsx   # Calculadora (dosis / costo)
│   ├── Contacto.tsx      # Formulario de contacto
│   ├── Emergencias.tsx   # Información de emergencias
│   ├── ChatFloat.tsx     # Chat flotante
│   ├── OfferBanner.tsx   # Banner de ofertas
│   ├── ExitPopup.tsx     # Pop-up de salida
│   ├── DarkModeToggle.tsx# Toggle de modo oscuro
│   ├── BackToTop.tsx     # Botón volver al inicio
│   ├── ScrollEffects.tsx # Efectos de scroll
│   └── Footer.tsx        # Pie de página
└── public/               # Assets estáticos
```

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción (requiere build previo) |
| `npm run lint` | Análisis estático con ESLint |

## Deploy

El despliegue recomendado es en [Vercel](https://vercel.com). Conecta el repositorio y cada push a `main` desplegará automáticamente.

```bash
npm run build   # verificar que el build pase antes de hacer push
```
