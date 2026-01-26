/portfolio-react-ts
│
├── public/                     # Archivos estáticos (favicon, imágenes, manifest.json)
│   └── assets/                 # Logos, fotos de proyectos, íconos
│
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── layout/             # Estructura general
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── home/               # Sección Home
│   │   │   ├── Home.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── about/              # Sección Sobre mí
│   │   │   └── About.tsx
│   │   ├── experience/         # Sección Experiencia
│   │   │   └── Experience.tsx
│   │   ├── contact/            # Sección Contacto
│   │   │   └── Contact.tsx
│   │   └── common/             # Botones, inputs, etc.
│   │       ├── Button.tsx
│   │       └── Input.tsx
│   │
│   ├── pages/                  # Vistas principales (si usas React Router)
│   │   └── AppRoutes.tsx
│   │
│   ├── data/                   # Datos estáticos (fácil de migrar a backend luego)
│   │   ├── projects.ts         # Lista de proyectos
│   │   ├── experience.ts       # Experiencia laboral
│   │   └── socialLinks.ts      # Redes sociales
│   │
│   ├── types/                  # Tipos e interfaces
│   │   ├── project.d.ts
│   │   ├── experience.d.ts
│   │   └── social.d.ts
│   │
│   ├── hooks/                  # Custom hooks
│   │   └── useDarkMode.ts
│   │
│   ├── utils/                  # Funciones auxiliares
│   │   └── formatDate.ts
│   │
│   ├── styles/                 # Estilos globales
│   │   ├── globals.css
│   │   └── tailwind.config.js  # Si usas Tailwind
│   │
│   ├── App.tsx                 # Punto de entrada de la app
│   └── main.tsx                # Render principal
│
├── tsconfig.json
└── package.json