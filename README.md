# MiPortafolio

Mini portafolio personal hecho con React y React Router para el curso de Desarrollo de Frontend (Ingeniería Civil Informática). Tiene cinco secciones: Inicio, Sobre mí, Habilidades, Proyectos y Contacto.

## Requisitos e instalación

- Node.js (versión 18 o superior) y npm.

```bash
npm install
```

## Cómo ejecutarlo

```bash
npm run dev
```

Luego abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Estructura de carpetas

```
src/
├── components/
│   ├── Header.jsx             Logo y menú con NavLink (5 enlaces)
│   ├── Footer.jsx             Nombre y año actual
│   ├── Layout.jsx             Header + contenido de la ruta (Outlet) + Footer
│   ├── TarjetaProyecto.jsx    Tarjeta que recibe título, descripción y enlace por props
│   └── FormularioContacto.jsx Formulario con useState, validación y confirmación
├── pages/
│   ├── Inicio.jsx
│   ├── SobreMi.jsx
│   ├── Habilidades.jsx
│   ├── Proyectos.jsx
│   └── Contacto.jsx
├── App.jsx                    Define las rutas
├── main.jsx                   Punto de entrada, activa BrowserRouter
└── index.css                  Estilos globales
```

## Rutas

| Ruta | Página | Qué muestra |
|------|--------|-------------|
| `/` | Inicio | Nombre, rol e invitación a recorrer el sitio |
| `/sobre-mi` | Sobre mí | Qué estudio y qué me interesa |
| `/habilidades` | Habilidades | Tecnologías con su nivel y herramientas |
| `/proyectos` | Proyectos | Proyectos con título, descripción y enlace |
| `/contacto` | Contacto | Formulario con validación y mensaje de confirmación |

## Dificultades encontradas y cómo las resolví

- **Error de import duplicado en `App.jsx`:** Vite mostraba "Identifier `Routes` has already been declared". Había copiado dos veces la misma línea de import; al eliminar la repetida se solucionó.