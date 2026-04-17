// ─────────────────────────────────────────────
//  PORTFOLIO DATA — Leandro Alexis Leiva
// ─────────────────────────────────────────────

export interface EducationItem {
  year: string
  degree: string
  institution: string
  description: string
}

export interface ExperienceItem {
  year: string
  role: string
  company: string
  description: string
}

export interface Project {
  id: number
  title: string
  description: string
  images: string[]
  tags: string[]
  github: string
  live: string
}

export interface Tool {
  name: string
  icon: string
  color: string
  iconBg?: string
}

export const data = {
  // ── Perfil
  name: 'Leandro Alexis Leiva',
  role: 'Software Developer',
  tagline: 'Técnico Informático · Desarrollador de Software',
  location: 'Tucumán, Argentina',
  email: 'Leandro3741@gmail.com',
  phone: '+54 3865 325797',
  bio: 'Técnico Informático y Desarrollador de Software orientado a la calidad y el detalle. Me apasiona construir productos que funcionen bien y se vean mejor. Comprometido con cada proyecto desde el primer hasta el último commit.',
  cvUrl: '#',

  // ── Stats
  stats: [
    { value: 2, suffix: '+', label: 'Años de Experiencia' },
    { value: 3, suffix: '+', label: 'Proyectos Creados' },
    { value: 100, suffix: '+', label: 'Problemas Resueltos' },
  ],

  // ── Redes
  social: {
    github: 'https://github.com/Akiramenaileo',
    linkedin: 'https://www.linkedin.com/in/leandro-leiva-10178435a/',
  },

  // ── Educación
  education: [
    {
      year: '2025',
      degree: 'Técnico Superior en Desarrollo de Software',
      institution: 'IES La Cocha — Extensión Juan B. Alberdi',
      description:
        'Formación superior en desarrollo de software, arquitectura de sistemas y programación orientada a objetos.',
    },
    {
      year: '2024',
      degree: 'React: Mejorando a Experto',
      institution: 'Udemy — Online',
      description:
        'Curso completo con más de 10 aplicaciones construidas en React, TypeScript y Node.js. Hooks, estado global, React Router, consumo de APIs REST y buenas prácticas modernas.',
    },
    {
      year: '2022',
      degree: 'Técnico Informático Profesional y Personal',
      institution: 'Escuela Técnica N°1 Juan B. Alberdi',
      description:
        'Título técnico con enfoque en hardware, redes, mantenimiento de equipos y soporte técnico a usuarios.',
    },
    {
      year: '2020',
      degree: 'Operador en Computación',
      institution: 'EDUCOOP Ltda.',
      description:
        'Certificación Microsoft Office en entornos profesionales y computación aplicada.',
    },
    
  ] as EducationItem[],

  // ── Experiencia
  experience: [
    {
      year: '2020 – Presente',
      role: 'Técnico Informático Independiente',
      company: 'Freelance — Juan B. Alberdi',
      description:
        'Mantenimiento y reparación de computadoras, armado y configuración de equipos, diagnóstico de fallas de hardware y software, instalación de sistemas y soporte técnico a usuarios.',
    },
    {
      year: '2025',
      role: 'Desarrollador Full Stack',
      company: 'Sistema de Ventas — Joyería',
      description:
        'Desarrollo de sistema integral: stock, pedidos, clientes y cajeros. Tienda online con catálogo de productos. Automatización del control del negocio adaptando un local físico a la tecnología.',
    },
  ] as ExperienceItem[],

  // ── Skills (sidebar)
  skills: {
    technical: [
      'Desarrollo Full Stack',
      'Soporte Técnico',
      'APIs REST',
      'Documentación',
      'Testing y Debugging',
      'Arquitectura de Software',
      'Despliegue y DevOps',
    ],
    soft: [
      'Resolución de problemas',
      'Pensamiento lógico',
      'Trabajo en equipo',
      'Comunicación técnica',
      'Adaptabilidad',
    ],
  },

  // ── Herramientas
  tools: [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/react/react-original.svg',
      color: '#61DAFB',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/typescript/typescript-original.svg',
      color: '#3178C6',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nodejs/nodejs-original.svg',
      color: '#339933',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/tailwindcss/tailwindcss-plain.svg',
      color: '#06B6D4',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/git/git-original.svg',
      color: '#F05032',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/html5/html5-original.svg',
      color: '#E34F26',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/css3/css3-original.svg',
      color: '#1572B6',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.simpleicons.org/github/ffffff',
      color: '#ffffff',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/vscode/vscode-original.svg',
      color: '#007ACC',
    },
    {
      name: 'Cloudinary',
      icon: 'https://cdn.simpleicons.org/cloudinary/3448C5',
      color: '#3448C5',
    },
    {
      name: 'Vercel',
      icon: 'https://cdn.simpleicons.org/vercel/ffffff',
      color: '#ffffff',
    },
    {
      name: 'Railway',
      icon: 'https://railway.com/brand/logo-light.png',
      color: '#0B0D0E',
    },
  ] as Tool[],

  // ── Proyectos
  projects: [
    {
      id: 1,
      title: 'BarberDemo',
      description:
        'Agenda de turnos online con disponibilidad en tiempo real, selección de servicio y barbero, y confirmación automática por WhatsApp y seña pagada con MercadoPago.',
      images: [
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776394066/Captura_de_pantalla_2026-04-16_232347_lrq2x7.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776394066/Captura_de_pantalla_2026-04-16_232405_byepkw.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776394066/Captura_de_pantalla_2026-04-16_232425_uszab0.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776394066/Captura_de_pantalla_2026-04-16_232444_y3yuat.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776394065/Captura_de_pantalla_2026-04-16_234142_lckmro.png',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'MercadoPago'],
      github: 'https://github.com/Akiramenaileo',
      live: 'https://barbershop-five-eta.vercel.app/',
    },
    {
      id: 2,
      title: 'Aylen Joyas',
      description:
        'Plataforma de compras completa con catálogo de productos, carrito y pagos con Transferencias. Incluye panel de administración para gestionar stock y pedidos.',
      images: [
        'https://res.cloudinary.com/dwdit2sp3/image/upload/fl_preserve_transparency/v1776366984/Captura_de_pantalla_2026-04-16_161445_cmrnnm.jpg?_s=public-apps',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776366984/Captura_de_pantalla_2026-04-16_161538_mwterz.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776366984/Captura_de_pantalla_2026-04-16_161519_k3ixf1.png',
        'https://res.cloudinary.com/dwdit2sp3/image/upload/v1776366984/Captura_de_pantalla_2026-04-16_161606_vxodri.png',
      ],
      tags: ['React', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Akiramenaileo',
      live: 'https://www.aylenjoyas.lat',
    },
    {
      id: 3,
      title: 'DevTuc Agency',
      description:
        'Landing page para agencia de desarrollo web con portafolio de servicios y panel de administración de contenido.',
      images: [],
      tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
      github: 'https://github.com/Akiramenaileo',
      live: 'https://devtuc.site',
    },
  ] as Project[],
}
