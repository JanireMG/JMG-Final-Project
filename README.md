# AniGaua
AniGaua, anime + gaua (noche en euskera), es un buscador de animes. 

## CONTENIDO
1. [Descripción](#descripción)
2. [Tipo de proyecto](#tipo-de-proyecto)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Tecnologías](#tecnologías)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Funcionalidades](#funcionalidades)
8. [Contribución](#contribución)
9. [Licencia](#licencia)
10. [Contacto](#contacto)

# Descripción
## Pagina pricipal/ Home
En la página principal podemos encontrar los animes con mejor valoración y los últimos lanzamientos. Estos datos se obtienen desde la **API pública de Jikan**

Tambien tenemos una barra de búsqueda.

En la parte superior derecha tenemos los botones de ``login`` y ``sign in``.

## Información de anime
Al hacer click sobre un anime, te muestra una breve descripción del anime, los episodios que tiene y la valoración.

En la parte superior izquierda tenemos 2 botones, botón ``home`` y ``back``.

## Log In y Sign In 
Ambos botones aparecen en la parte superior derecha. Una vez iniciada la sesión, estos botones se sustituyen por los botones ``user`` y ``log out``.

## Panel de usuario
El botón de ``user`` nos redirige a nuestro panel de usuario en el que se nos permite cambiar nuestro nombre de usuario y/o contraseña.

En la parte inferior hay 4 videos meme para hacer mas dinámico este panel.

# Tipo de proyecto
- **Full stack**➔ Frontend con React + Vite y Backend con Express.
- **Base de datos**➔ MySQL.
- **Estilo**➔ Sass y Bootstrap.
- **Sesiones y autenticación**➔ ``express-session`` y ``bcrypt``.

## Scripts principales
- `dev`➔ Inicia el servidor de desarrollo con Vite.
- `build`➔ Genera la build de producción del frontend.
- `preview`➔ Previsualiza la build de producción.
- `lint`➔ Ejecuta ESLint para verificar la calidad del codigo.

## Dependencias principales
### Frontend
- `react` **y** `react-dom`➔Librería de UI.
- `react-router-dom`➔ Rutas y navegación.
- `bootstrap`➔ Componentes y estilos.
- `sass`➔ Preprocesador de CSS.
- `swiper`➔ Carruseles y slider.
- `@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/fontawesome-svg-core`➔ Iconos.

### Backend
- `express`➔ Framework del servidor.
- `mysql2`➔ Conexión con BD MySQL.
- `axios`➔ Peticiones HTTP.
- `cors`➔ Llamadas desde otros orígenes.
- `cookie-parser`➔ Manejo de cookies.
- `express-session`➔ Gestión de sesiones.
- `bcrypt`➔ Encriptación de contraseñas.

### DevDependencies
- `vite`➔ Bundler y servidor de desarrollo.
- `@vitejs/plugin-react`➔ Plugin de React para Vite.
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`➔ Linting y buenas prácticas.
- `sass-embedded`➔ Compilador Sass.
- `@types/react`, `@types/react-dom`➔ Tipos para typeScript/IntelliSense

# Instalación
## Clonar repositorio
```bash
#bash
git clone https://github.com/JanireMG/JMG-Final-Project.git
cd JMG-Final-Project
npm install
```
## Configurar archivo .env
Crea un archivo ``.env`` en la raiz del proyecto añadiendo:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=final_project_db
SESSION_SECRET=contraseña_secreta
```
## Iniciar el proyecto
```bash
#bash
npm run dev
```

# Uso
## 1. Abrir la app
### Frontend
Iniciar el proyecto con:
```bash
#bash
npm run dev
```
### Backend
Poner en marcha el servidor:
```bash
#bash
node server.js
```
Abrir el navegador en:
```bash
#navegador
http://localhost:5173/
```

## 2. Navegación
- **Home**➔ Página principal, muestra los animes más valorados y los ultimos lanzamientos.
- **Barra de búsqueda**➔ Permite buscar animes por nombre.
- **Botones** ``log in`` **y** ``sign in``➔ Para hacer la autenticación.
- **Botones** ``user`` **y** ``logout``➔ Aparecen tras iniciar sesión o registrarte.
-**Botones** ``back`` **y** ``home``➔ Aparecen cuando no estás en la página principal.

## 3. Interacción con la app.
1. **Iniciar sesión/registrarse**➔ Usa los botones ``log in``/``sign in`` e introduce tus credenciales.
2. **Buscar animes**➔ Usa la barra de búsqueda para escribir el nombre de un anime. Usa el botón ``Search`` o pulsa ``Enter ↵``.
3. **Ver detalles de un anime**➔ Haz click sobre la imagen del anime, podrás ver una breve descripción, los episodios que tiene y la valoración.
4. **Volver a** ``Home``  **o hacia atrás**➔ Usa los botones ``Home 🏠`` o ``Back 🔙``
5. **Actualizar contraseña o user**➔ Haz click sobre el botón ``user 👤``.
6. **Cerrar sesión**➔ Haz click sobre el botón ``logout``.

# Tecnologías
## Frontend
- **React**➔ Librería para construir la UI.
- **Vite**➔ Bundler y servidor de desarrollo para React.
- **React** Router➔ Manejos de navegación y rutas entre las páginas.
- **Bootstrap**➔ Componentes y estilos prediseñados.
- **Sass**➔ Prepocesador de CSS para mantener mas organizado los estilos.
- **Swiper**➔ Manejo de carrusel y slider.
- **FontAwesome**➔ Manejo de iconos para botones.

## Backend
- **Node.js + Express**➔ Servidor y manejo de las rutas.
- **MySQL**➔ Base de datos, almacena usuarios.
- **mysql2**➔ Conexión y consultas a BD.
- **Jikan API**➔ API pública para obtener datos de animes.
- **Axios**➔ Peticiones HTTP desde el frontend al backend y a la API Jikan.
- **CORS**➔ Permite llamadas desde otros orígenes.
- **Cookie-parser**➔ Manejo de cookies.
- **express-session**➔ Gestión de sesión de usuario.
- **bcrypt**➔ Encriptación de contraseñas.
  
# DevTools/DevDependencies
- **ESLint**➔ Revisión de calidad de código y buienas prácticas.
- **Sass-embeddes**➔ Compilador Sass.
- **@vitejs/plugin-react**➔ Integra React con Vite.
  
# Estructura del Proyecto
```
/FINAL-PROJECT
│
├─ DB/
│ └─ final_project_db.sql
│
├─ src/
│ ├─ Components/
│ │   ├─ Auth/
│ │   ├─ Pages/
│ │   └─ ReutilizableFx/
│ │          └─ Login
│ ├ Helpers/
│ ├ style/
│ ├ App.jsx
│ └ main.jsx
│
├─ static/
│ └─ NoDetailImg/
│
├─ eslint.config.js
├─ index.html
├─ package-lock.json 
├─ package.json 
├─ README.md
├─ server.js
└─ vite.config.js
```
```
`DB`➔ Scripts SQL para la base de datos.
`src`➔ Código fuente de React.
`static`➔ Imágenes.
`server.js`➔ Backend con Express.
`package.json` Dependencias y scripts npm.
```

# Funcionalidades
## Autenticación (Log in/Sign in)
- Ubicación➔ ``src/Components/Auth/login.jsx``
- Funciones auxliares➔ ``LoginUser.jsx`` y ``RegisterUser.jsx``
- Backend relacionado➔ Rutas ``/login`` y ``/register`` en ``server.js``
  
Este código define un componente de **inicio de sesion y registro** para la aplicación React, combinando componentes de **clase y funcionales**.

El componente principal ``Login`` administra su propio **estado local** para las credenciales del usuario, los mensajes de error y los valores de formulario.

### Flujo general
Al **montarse** el componente hace una solicitud ``GET`` al backend (``/api/session``) para comprobar si el usuarios ya tiene la sesión activa.

Si está autenticado, se actualiza el estado global y el nombre de usuario local.

El componente tiene 2 manejadores principales:
  - ``handleLogin``➔ evita el envío de formulario, toma los datos del etado y llama a ``loginUser()``.
  - ``handleRegister``➔ realiza la misma lógica, pero usando ``registerUser()``.
  
  Ambos interactúan con el backend mediante **Axios**.

Si la autenticación o registro es exitoso:
  - El estado del **componente padre** se actualiza (``setLoggedIn``, ``setUser``).
  - Se navega automáticamente a al pagina principal(``navigate("/") ``).

En caso de error, se muestra un mensaje con el contenido de ``errorText``.

### Renderizado condicional
El método ``render()`` muestra distintos elementos según el estado de la autenticación y ruta actual:
  - Si el usuario **está loggeado**, se muestran los botones para   acceder al **panel de usuario** o **cerrar sesión**.
  - Si no lo está, se renderiza el formulario de **login** o **registro**, dependiento de la ruta (``/login`` o ``/register``).
  - Ambos formularios contienen inputs controlados y muestran errores en caso de credenciales incorrectas.

### Integración con React Router
El componente ``LoginWrapper`` usa los **hooks** ``useLocation``, ``useNavigate`` y ``useOutletContext`` para pasar las props necesarias al componente de clase ``Login``.

Esto permite que un **componente de clase** tenga acceso a funciones y contextos que normalemnte solo están disponibles en componentes funcionales.

## Cierre de sesión (Logout)
- Ubicación➔ ``src/Components/Auth/logout.jsx``
- Backend relacionado➔ Endpoint ``/api/logout`` en ``server.js``

Este código define un **componente funcional** llamado ``Logout``, maneja la **funcionalidad de cierre de sesión** de la aplicación.

Utiliza el **hook** ``useNavigate`` de React Router para redirigir al usuario tras cerrar la sesión y la librería **Axios** para realizar solicitudes HTTP al backend.

### Flujo del componente
- Cuando el usuario hace click en el botón renderizado por el componente ``Btn``, se ejecuta la función ``handleLogout()``.
- Esta función envía usa solicitud ``POST`` al endpoint ``/api/logout`` en el servidor.
- ``{ withCredentials: true }`` va incluida en la petición para enviar las cookies de sesión. **Permite** al backend **identificar y cerrar la sesión** correctamente.
- Si la solicitud es exitosa:
  - Se actualiza el estado global de autenticación mediante ``setLoggedIn(false)``.
  - Se **redirige** al usuario a la **página principal** ``("/")``
-En caso de haber un error, se muestra en la consola.

## Detalle de anime 
- Ubicación➔  ``src\Components\Pages\AnimeInfo.jsx``
- Backend / API➔ Jikan API (endpoint externo)

Este componente está basado en clases. Se encarga de **mostrar la información** del anime seleccionado.

Recibe los datos desde la API pública de Jikan y esta devuelve información como el **título**, la **imagen**, la **sinopsis** la **puntuación** y los **episodios**.

### Flujo del componente
- El componente, durante la renderización, lo primero que hace es verificar su estado de carga (``isLoading``):
  - Si está **cargando**, muestra un ìcono giratorio.
  - Si **no existe información** del anime (``!animeDetails``), se renderiza el componente ``NoDetails``.
- Cuando los datos se han cargado correctamente, el componente muestra :
  - En la **parte superior** aparece el componente ``TopBanner``, este actúa como cabecera.
  - El contenido principal está organizado en un contenedor con la clase ``animeDetailContainer``.
  - El **título** del anime se muestra de **forma## Detalle de anime 
- Ubicación➔  ``src\Components\Pages\AnimeInfo.jsx``
- Backend / API➔ Jikan API (endpoint externo)

Este componente etsá basado en clases. Se encarga de **mostrar la información** del anime seleccionado.

Recibe los datos desde la API pública de Jikan y esta devuelve información como el **título**, la **imagen**, la **sinopsis** la **puntuación** y los **episodios**.

### Manejo de estados
- Estado de carga➔ Se muestran **mensajes informativos** mientras la información es recuperada de la API.
- Estado vacío➔ Si un anime no tiene detalles disponibles, utiliza el **componente** ``NoDetails``.
- Estado completo➔ Se **renderiza** toda la **información**, tanto **visual** como **textual** del anime.
  