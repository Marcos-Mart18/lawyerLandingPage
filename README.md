# Landing Page - Firma Legal

Landing page corporativa moderna para firma de abogados, desarrollada con Angular 19 y Tailwind CSS.

## 🎨 Características de Diseño

- **Estilo "Lujo Silencioso"**: Diseño minimalista y elegante con paleta de azules corporativos
- **Glassmorphism**: Efectos de vidrio esmerilado en navbar y elementos clave
- **Micro-animaciones**: Transiciones suaves y animaciones al scroll
- **Responsive**: Totalmente adaptable a dispositivos móviles y tablets

## 🚀 Características Técnicas

### Componentes Modulares

1. **Navbar**: Navegación sticky con glassmorphism y cambio de color al scroll
2. **Hero**: Efecto Ken Burns con crossfade entre dos imágenes de fondo
3. **Features**: Grid 3x3 interactivo con expansión de tarjetas al hover
4. **Services**: Modales dinámicos para detalles de servicios (sin redirección)
5. **Experience**: Tabs inteligentes con carrusel infinito de logos
6. **Contact**: Formulario multistep con validaciones reactivas
7. **Footer**: Información corporativa y enlaces
8. **Floating Buttons**: Botones de WhatsApp y teléfono con efecto pulso

### Servicios

- **Cobro Prejurídico y Jurídico**: Recuperación de cartera empresarial
- **Asesoría Jurídica Empresarial**: Representación legal integral

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 🛠️ Tecnologías

- Angular 19
- Tailwind CSS
- TypeScript
- Reactive Forms

## 📱 Widgets de Acción

- Botón flotante de WhatsApp (inferior derecha)
- Botón flotante de teléfono (inferior derecha)
- Botón scroll to top (aparece después de 300px de scroll)

## 🎯 Paleta de Colores

- **Navy**: Azul marino corporativo (#102a43 - #f0f4f8)
- **Slate**: Gris azulado (#0f172a - #f8fafc)
- **Ice**: Azul hielo (#0c4a6e - #f0f9ff)

## 📝 Personalización

Para personalizar la landing page:

1. **Imágenes**: Reemplaza las imágenes en `src/assets/`
2. **Colores**: Modifica `tailwind.config.js`
3. **Contenido**: Edita los componentes en `src/app/components/`
4. **Contacto**: Actualiza números de teléfono y WhatsApp en `floating-buttons.component.html`

## 🌐 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── services/
│   │   ├── experience/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── floating-buttons/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── banner/
│   ├── logo/
│   └── imagesService/
└── styles.css
```

## 📄 Licencia

Proyecto privado - Todos los derechos reservados
