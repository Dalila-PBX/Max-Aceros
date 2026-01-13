# Max Aceros - Ferremayoreo

## 1. Descripción General
**Max Aceros** es un sitio web corporativo tipo *Landing Page* diseñado para una empresa distribuidora de materiales de construcción, ferretería y acero en México. El sitio presenta información institucional, catálogos de productos mediante carruseles interactivos, categorías de servicios, cartera de clientes y un formulario de contacto con integración de mapas y seguridad.

## 2. Estructura del Proyecto
El proyecto sigue una estructura web estándar:

```text
/
├── index.html              # Archivo principal de la Landing Page
├── enviar.php              # Backend para procesar el formulario de contacto
├── css/
│   ├── style.css           # Estilos personalizados principales
│   ├── normalize.css       # Normalización de estilos de navegador
│   └── swiper-bundle.min.css # Estilos para los carruseles (Librería)
├── js/
│   ├── main.js             # Lógica principal (Menú, Scroll, Configuración)
│   ├── swiper-bundle.min.js # Lógica de los carruseles (Librería)
│   └── scrollreveal.min.js # Animaciones al hacer scroll (Librería)
└── images/                 # Activos gráficos (Logos, productos, iconos)
```

## 3. Tecnologías y Dependencias

### Frontend
*   **HTML5:** Semántico y estructurado.
*   **CSS3:** Uso de Flexbox y Grid para el diseño responsivo (`.grid`, `.flex-container`).
*   **JavaScript (ES6):** Manipulación del DOM y lógica de interacción.

### Librerías y Recursos Externos
*   **Fuentes:** Google Fonts (Inter, League Gothic, Montserrat).
*   **Iconos:** FontAwesome (Kit JS) y Bootstrap Icons (CDN).
*   **Swiper.js:** Para los carruseles de "Productos Principales" y "Conducciones".
*   **ScrollReveal.js:** Para animaciones de entrada de elementos al hacer scroll.

### Servicios e Integraciones
*   **Google Maps Embed API:** Mapa interactivo en la sección de contacto.
*   **Google reCAPTCHA v2:** Protección contra spam en el formulario.
*   **PHP:** Procesamiento del formulario en el servidor (`enviar.php`).

## 4. Secciones del Sitio

El archivo `index.html` está dividido en las siguientes secciones lógicas:

1.  **Header:** Navegación responsiva con menú móvil (hamburguesa).
2.  **Inicio (Hero):** Banner principal con título y eslogan.
3.  **Nosotros:** Información institucional (Misión y descripción).
4.  **Productos Principales:** Dos carruseles interactivos (Tuberías y Conducciones) controlados independientemente mediante clases `.swiper-button-prev-1/2`.
5.  **Categoría de Productos:** Grid de tarjetas detallando líneas de negocio (Incendios, Marítimos, Construcción, Petroleros, etc.).
6.  **Clientes:** Grid de logotipos de la cartera de clientes.
7.  **Contacto:** 
    *   Formulario con validación y reCAPTCHA.
    *   Mapa de ubicación (Google Maps).
    *   Información de contacto directa y botón flotante de WhatsApp.
8.  **Footer:** Información legal, créditos de desarrollo y marcas asociadas.

## 5. Configuración y Despliegue

### Requisitos
*   Servidor web con soporte para **PHP** (Apache/Nginx) para el funcionamiento del formulario de contacto.

### Configuración del Formulario (`enviar.php`)
El archivo `enviar.php` maneja el envío de correos y la validación de seguridad.
*   **Validación:** Verifica que los campos obligatorios y el reCAPTCHA no estén vacíos.
*   **reCAPTCHA:** Utiliza la API de Google para verificar la respuesta del usuario.
*   **Envío:** Utiliza la función `mail()` de PHP.

> **Nota:** Para producción, asegúrate de que las claves de reCAPTCHA (Site Key en HTML y Secret Key en PHP) correspondan a tu dominio.

