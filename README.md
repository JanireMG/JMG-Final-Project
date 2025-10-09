# AniGaua
AniGaua, anime + gaua (noche en euskera). 

Es una aplicación para hacer búsquedas relacionadas con animes. En ella podremos encontrar los animes mejor valorados y los ultimos lanzamientos entre muchos otros animes.


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
## Pagina principal/ Home
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
### Backend
Poner en marcha el servidor:
```bash
#bash
node server.js
```

### Frontend
Iniciar el proyecto con:
```bash
#bash
npm run dev
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
  
## DevTools/DevDependencies
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
- Componentes
  1. [Autenticación](#autenticación)
  2. [Páginas](#páginas)
  3. [Funciones reutilizables](#funciones-reutilizables)
- Helpers
  1. [Iconos](#iconos)

## AUTENTICACIÓN
## Inicio y registro (login)
- **Ubicación**➔ ``src/Components/Auth/login.jsx``
- **Funciones auxliares**➔ ``LoginUser.jsx`` y ``RegisterUser.jsx``
- **Backend relacionado**➔ Rutas ``/login`` y ``/register`` en ``server.js``
  
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

## Cierre de sesión (logout)
- **Ubicación**➔ ``src/Components/Auth/logout.jsx``
- **Backend relacionado**➔ Endpoint ``/api/logout`` en ``server.js``

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

## PÁGINAS
## Detalle de anime (AnimeInfo)
- **Ubicación**➔  ``src\Components\Pages\AnimeInfo.jsx``
- **Backend / API**➔ Jikan API (endpoint externo)

Este componente está basado en clases. Se encarga de **mostrar la información** del anime seleccionado.

Recibe los datos desde la API pública de Jikan y esta devuelve información como el **título**, la **imagen**, la **sinopsis** la **puntuación** y los **episodios**.

### Flujo del componente
- El componente, durante la renderización, lo primero que hace es verificar su estado de carga (``isLoading``):
  - Si está **cargando**, muestra un ìcono giratorio.
  - Si **no existe información** del anime (``!animeDetails``), se renderiza el componente ``NoDetails``.
- Cuando los datos se han cargado correctamente, el componente muestra :
  - En la **parte superior** aparece el componente ``TopBanner``, este actúa como cabecera.
  - El contenido principal está organizado en un contenedor con la clase ``animeDetailContainer``.
  - El **título** del anime se muestra de forma destacada.
  - La **imagen** (``animeDetails.images.jpg.image_url``) y **sinospsis** (``animeDetails.synopsis``) están colocadas una al lado de la otra.
  - Por último, se muestran los episodios (``animeDetails.episodes``) y la valoración (``animeDetails.score``).
  
### Manejo de estados
- Estado de carga➔ Se muestran **mensajes informativos** mientras la información es recuperada de la API.
- Estado vacío➔ Si un anime no tiene detalles disponibles, utiliza el **componente** ``NoDetails``.
- Estado completo➔ Se **renderiza** toda la **información**, tanto **visual** como **textual** del anime.

## Página principal (Home)
- **Ubicación**➔ ``src\Components\Pages\Home.jsx``
- **Backend / API**➔ Jikan API.
  
Este componente es **funcional** y es la página principal de la aplicación. Estructura la vista inicial, mostrando el banner, la barra de búsqueda y los animes.

### Estructura del componente
El componente devuelve una estructura JSX que está compuesta por 3 componentes hijo:
- ``TopBanner``
  - Se renderiza en la parte superior de la página.
  - Recibe la prop ``showButtons={false}`` que **oculta** los **botones** que normalmente aparecen en el banner. Da una imagen más limpia a la pantalla de inicio.
- ``Searchbar``
  - Permite al usuario **hacer búsquedas** de animes desde la página principal.
  - Integra peticiones hacia la API Jikan, facilitando la interacción con la aplicación.
- ``HomeContainer``
  - Muestra una lista de animes con los mejor valorados y los ultimos lanzamientos.
  - Cada sección recibe datos de la API Jikan mediante llamaads internas.

## Contenedor principal (HomeContainer)
- **Ubicación**➔ ``src\Components\Pages\HomeContainer.jsx``
- **Backend / API**➔ Jikan API (endpoints para los animes más populares y los últimos lanzamientos).

Este componente, está **basado en clases**. Se encarga de mostrar el listado de animes en la página principal.

Obtiene los datos desde la API Jikan y los organiza en 2 secciones:
  - Animes más valorados.
  - Ultimos lanzamientos.
  
### Flujo del componente
- Cuando el componente se **monta** (``componentDidMount``), se establece el estado ``isLoading`` en ``true``, ejecutándose **2 solicitudes asíncronas**:
  - Una para obtener los **animes mejor valorados**.
  - El otro para obtener los **últimos lanzamientos**.
- Cada solicitud actualiza su parte correspondiente del estado (``topAnimes``, ``lastAnimes``) y finalmente ``isLoading`` a ``false`` una vez completada.

## Renderizado
En el método ``render()``, el componente **desestructura** los valores ``isLoading``, ``topAnimes`` y ``lastAnimes`` del estado.

Después, retorna una estructura JSX organizada en 2 columnas:
  - Columna izquierda➔ muestra los **animes más valorados** mediante el componente reutilizable ``AnimeList``.
  - Columna derecha➔ muestra los **últimos lanzamientos**, usando también ``AnimeList``.
Cada lista recibe como **props** la información del anime y el estado de carga, eso permite que ``AnimeList`` muestre **indicadores de carga** o el **contenido final**, según corresponda.

### Manejo de estados
- El estado ``isLoading`` controla el indicador de carga general.

## Barra de búsqueda (SerachbarContent)
- **Ubicación**➔ ``src\Components\Pages\SearchbarContent.jsx``
-**Backend / API**➔ API Jikan

Este componente, está **basado en clases**. Se encarga de **manejar** toda la **funcionalidad de búsqueda** de animes dentro de la aplicación.

Se apoya en la API Jikan para obtener los resultados.

### Dependencias e importaciones
- **React**➔ para la creación del componente y manejo del estado.
- **Axios**➔ para realizar las solicitudes HTTP a la API.
- **Componentes reutilizables**➔ ``AnimeList``, ``SearchBar`` y ``TopBanner``.
- **withLocation**➔ HOC usado para acceder a la ubicación actual.

### Estado e inicialización
En el **constructor**, se inicializa el estado con las siguientes props:
  - ``searchResults``➔ **array** que almacena los resultados de búsqueda.
  - ``isLoading``➔ **boolean** que indica si hay una búsqueda en progreso.

También define 2 variables de instacia:
  - ``debounceTimeout``➔ **controla** el **retraso** antes de ejecutar la búsqueda, evitando hacer una solicitud por cada pulsación en el teclado.
  - ``abortController``➔ permite **cancelar solicitudes** HTTP previas si el usuario realiza una búsqueda nueva antes de terminar la anterior.

### Lógica de búsqueda
``handleFetchSearchResults(query)`` es la función principal, gestiona el proceso de búsqueda:
- Si el **campo** de **búsqueda** está **vacío**, **limpia los resultados** y cambia ``isLoading`` a ``false``.
- Si hay una **búsqueda en curso**, ➔ previo para evitar solicitudes redundantes.
- **Configura** un **nuevo temporizador** (debounce) que espera a que el usuario pare de escribir antes de realizar la petición.
- Antes de realizar una nueva solicitud, **cancela** cualquier **petición anterior** usando ``abortController``.
- Por último, **envía** la **solicitud** a la API Jikan y actualiza el estado con los resultados recibidos.

## Panel de usuario (UserPanel)
- **Ubicación**➔ ``src\Components\Pages\UserPanel.jsx``
- **Backend / API**➔ Endpoint interno ``PUT /api/users/:id``

Es un componente **funcional** que se encarga de gestionar la **actualización del perfil** de usuario. Permite modificar el nombre de usuariuos y/o la contraseña.

Integra comunicación con el backend mediante **Axios** y muestra mensajes de éxito o error dependiendo del resultado.

### Estado y variables
Utiliza el **hook** ``useState`` para manejar el estado interno:
- ``message``➔ Si la actualización es exitosa, muestra un mensaje de confirmación.
- ``error``➔ Almacena mensajes de error en caso de validaciones incorrectas.

### Flujo de componente
- **Verificación inicial del usuario**:
  - Si el objeto ``user`` no está disponible, se muestra un **ícono giratorio** para indicar que la información está cargando.
- **Función principal** ``handleUpdate``:
  - Se **ejecuta al enviar el formulario** de actualización.
  - Limpia los mensajes previos (``message`` y ``error``).
  - Comprueba si el usuario tienen una **sesión activa** (``user.id``):
    - Si no existe, muestra un mensaje de error y se detiene la ejecución.
- **Validación de campos**:
  - Crea un objeto ``payload`` con los datos a actualizar (``username``, ``password``).
  - Si el usuario no introduce ningún campo, se muestra un mensaje solicitando completar al menos un campo.
- **Comunicación con el servidor**:
  - Envía una solicitud **PUT** al backend (``/api/users/:id``) mediante **Axios**, incluyendo ``withCredentials: true`` para mantener la sesión.
  - Si es exitosa la operación:
    - Se actualiza el estado del usuario local (``setUser``).
    - Se muestra un mensaje de confirmación.
  - Si ocurre un error durante la solicitud, se captura y se muestra en el bloque ``catch``.
  
## FUNCIONES REUTILIZABLES
## Inicio de sesión (LoginUser)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\Login\LoginUser.jsx``
- **Backend / API**➔ Endpoint interno ``POST /api/login``

``loginUser`` es una **función asíncrona**, se encarga de **gestionar** el **inicio de sesión** del usuario.

Utiliza **Axios** para enviar la **solicitud POST** al backend, enviando las **credenciales** del usuario en formato **JSON**.

### Flujo de la función
- Recibe como **parámetros**➔ ``username`` y ``password``.
- Envía una petición **POST** al endpoint ``/api/login`` con:
  - **Body**➔ los datos del usuario (``{ username, password }``)
  - **Headers**➔ especifica el tipo de contenido como ``application/json``.
  - **withCredentials**➔ incluye cookies o tokens de autenticación en la solicitud.
- Si la **solicitud** es **exitosa**:
  - Devuelve los **datos de respuesta** del servidor.
- Si ocurre un **error**:
  - El error se **registra** en la consola.
  - Se devuelve un **objeto estándar de error** con mensaje:
    - "User or password error."
  
## Registro de usuario (RegisterUser)
- **Ubicación**➔ ``src\Components\ReutilizableFx\Login\RegisterUser.jsx``
- **Backend / API**➔ Endpoint interno ``POST /api/register``
  
``registerUser`` es una **función asíncrona**, se encarga de **gestionar** el **registro** de nuevos usuarios.

Utiliza **Axios** para enviar la **solicitud HTTP POST** al servidor, enviando los datos del usuario en formato **JSON**.

### Flujo de la función
- Recibe como **parámetros**➔ ``firstname``, ``username``. ``email`` y ``password``.
- Envía una petición **POST** al endpoint ``/api/register`` con:
  - **Body**➔ los datos del nuevo usuario
  - **Headers**➔ especifica el tipo de contenido como ``application/json``.
  - **withCredentials**➔ incluye cookies o tokens de autenticación.
- Si la **solicitud** es **exitosa**:
  - Devuelve los **datos de respuesta** del servidor, con el estado de registro y las información del nuevo usuario.
- Si ocurre un **error**:
  - El error se **registra** en la consola.
  - Si el servidor devuelve un **mensaje específico**, se retorna el mensaje junto a ``success: false``.
  - Si **no hay mensaje específico**, se devuelve un mensaje genérico:
    - "Unexpected error."

## Lista de animes (AnimeList)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\AnimeList.jsx``
- **Backend / API**➔ Datos recibidos desde la API Jikan.

``AnimeList`` es un **componente funcional**, se encarga de mostrar una lista de animes con su imagen, título y puntuación.

Recibe 3 **props** principales➔ ``title``, ``animes`` y ``loading``.

### Flujo del componente
- Utiliza el **hook** ``useNavigate`` para redirigir al usuario hacia la página de detalles el anime seleccionado.
- Durante la renderización:
  - Si ``loading`` es **true**, se muestra un ícono giratorio para indicar que los datos se están obteniendo.
  - Cuando la carga finaliza, se recorre el array ``animes`` con ``map()`` y se muestran cada anime en su propia columna.
  
### Contenido mostrado
-El **título** de la sección se muestra en la parte superior.
- Por cada anime se muestra:
  - El **nombre** del anime (``anime.title``).
  - Una imagen (``anime.images.jpg.image_url``).
  - Al hacer **click sobre la imagen**, el usuario es redirigido a la página de **detalles**.
  - La puntuación:
    - Si hay **valoración**➔ se muestra el valor.
    - Si **no hay valoración**➔ se muestra "No score availiable".

## Botones (Btn)
- **Ubicación**➔ ``src\Components\ReutilizableFx\Btn.jsx``.
- **Dependencias**➔ React Router (``useNavigate``).
  
``Btn`` es un **componente funcional**, actúa como un grupo de botones reutilizable. Se encarga de manejar la **navegación** y las **acciones de usuario**.

### Flujo del componente
- Recibe varias funciones como **props**➔ ``onBackClick``, ``onHomeClick``, ``onUserClick``, ``onRegisterClick``, ``onLoginClick`` y ``onLogoutClick``.
- Usa el **hook** ``useNavigate`` para redirigir al usuario en los botones ``Log In`` y ``Sign In``.
- Renderiza el contenido en **2 columnas**:
  - **Izquierda**➔ Botones de navegación **Home** y **Back**.
  - **Derecha**➔ Botones de usuario **User**, **Logout**, **Log In** y **Sign In**.
- Cada botón solo se muestra si su prop esta definida.
  
## Sin detalles disponibles (NoDetails)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\NoDetails.jsx``
- **Dependencias**➔ React Router (``useNavigate``).

``NoDetails`` es un componente **funcional**, se encarga de mostrar un mensaje informativo cuando no haya detalles disponibles para el anime seleccionado.

### Flujo del componente
- Utiliza el **hook** ``useNavigate`` para redirigir al usuario.
- Renderiza un contenedor con la clase ``noDetailContainer`` incluyendo:
  - Un **encabezado principal** y un **subtítulo** informando de que no hay detalles disponibles.
  - Una imagen.
- En la parte inferior incluye un **botón**, reutilizado del componente ``Btn``, para redirigir al usuario a la **página principal** (``"/"``).

## Barra de búsqueda (Searchbar)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\Searchbar.jsx``
- **Dependencias**➔ React Router (``useNavigate``), React (``useState``).

``Searchbar`` es un componente **funcional**, perimite al usuario buscar títulos de animes.

Utiliza el **hook** ``useState`` para manejar el valor actual del término de búsqueda y el **hook** ``useNavigate`` para **redirigir** a la página de **resultados**.

### Flujo del componente
- La lógica principal la tiene la **función** ``handleSearch``
  - Verifica que el campo de búsqueda no esté vacío ni contenga solo espacios.
  - Si es **válido**, redirige a la ruta ``/search?query=your-search-term``, utilizando ``encodeURIComponent`` para codificar el texto de forma segura en la URL.
- **JSX renderiza** un contenedor que incluye:
  - Un **campo de entrada controlado** (input) que esta vinculado al estado ``query``. Este se actualiza según va escribiendo el usuario.
  - Un **botón** con el texto Search y un icono de una lupa. Al hacer click sobre él, se ejecutra la búsqueda.
  - ``onKeyDown`` permite ejecutar la búsqueda pulsando la tecla **Enter**.

## Encabezado (TopBanner)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\TopBanner.jsx``
- **Dependencias**➔ React Router (``useNavigate``, ``useOutletContext``), React.

``TopBanner`` en un componente **funcional**. Actúa como encabezado principal y es reutilizable dentro de la aplicación.

Utiliza el **hook** ``useNavigate`` para realizar la navegación programática y el **hook** ``useOutletContext``para acceder a información global del usuario como ``loggedIn`` y ``setLoggedIn``.

### Flujo del componente
- El componente recibe **2 props**:
  - ``title``➔ título que se muestra en el encabezado.
  - ``showButtons``➔ controla si se muestran los botones de navegación.
- **JSX renderiza** una estructura con 3 columnas:
  - **Izquierda**➔ Muestra los botones de **inicio** y **volver atrás**.
  - **Centro**➔ Muestra el título de la página.
  - **Derecha**➔  El contenido mostrado depende del estado de sesión del usuario:
    - Si el usuario **ha iniciado sesión**➔ muestra los botones de **panel de usuari**o y **cerrar sesión**.
    - Si el usuario **no ha iniciado sesión**➔ muestra los botones de **iniciar sesión** y **registrarse**.

## Carrusel de videos (UserPanelCarousel)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\UserPanelCarousel.jsx``
- **Dependencias**➔ Swiper (``Swiper``, ``SwiperSlide``), módulos de Swiper **Navigation** y **Pagination**.

``UserPanelcarousel`` es un componente **funcional** que muestra un carrusel de vídeos de Youtube utilizando la librería **Swiper**.

Dentro del componente se define un **array** llamado ``videos`` que contiene varias URLs de vídeos.

### Flujo del componente
- El componente devuelve un elemento ``Swiper`` que está configurado con los módulos de **navegación** y **paginación**, permitiendo:
  - Moverse entre vídeos mediante flechas.
  - Una sola diapositiva visible por vez.
  - Un bucle infinito de reproducción.
  - Espaciado de 30 píxeles entre cada vídeo.
- El contenedor tiene unas **medidas** de:
  - Ancho del 100%.
  - Altura fija de 400 píxeles.
- Dentro del ``Swiper``, se mapea el array ``videos`` para crear un ``SwiperSLide`` por cada URL, donde:
  - Cada slide contiene un **iframe** que inserta el vídeo correspondiente.
  - El **iframe** incluye estos atributos:
    - ``loading="lazy"`` para **carga diferida**.
    - ``allowFullScreen`` para **reproducción** de **pantalla completa**.
    - ``allow`` con permisos específicos para mejorar la experiencia del usuario.

## HOC (withLocation)
- **Ubicacion**➔ ``src\Components\ReutilizableFx\withLocation.jsx``
- **Dependencias**➔ React Router (``useLocation``).

``withLocation`` es un **HOC** (Higher Order Component), es decir, una **función** que **recibe un componente como argumento** y **devuelve** una **nueva versión** del mismo con **propiedades adicionales**.

En este caso, el **HOC** inyecta la información de la ruta actual como una prop llamada ``location`` al componente que envuelve.

### Flujo del componente
- Dentro de la función que envuelve al componente, se utiliza el **hook** ``useLocation`` de React Router para obtener el objeto de ubicación actual, que contiene **información** como:
  - La **URL** actual.
  - El **pathname**.
  - Los **parámetros de búsqueda**.
  - Otros **datos** del **historial de navegación**.
- Después, el componente original se renderiza con todas sus props originales más una nueva prop➔ ``location``, que incluye los datos de la ruta actual.

## ICONOS (Icons)
- **Ubicacion**➔ ``src\Helpers\icons.jsxx``
- **Exportación**➔ ``export default Icons``.
- **Dependencias**➔ ``@fortawesome/free-solid-svg-icons``, ``@fortawesome/fontawesome-svg-core``

### Flujo del componente
- Se importan varios iconos, como:
  - ``faMagnifyingGlass``➔ lupa de búsqueda
  - ``faLeftLong``➔ flecha de retroceso
  - ``faHouse``➔ inicio
  - ``faUser``➔ usuario
  - ``faArrowRightFromBracket``➔ cerrar sesión
  - ``faSpinner``➔ indicador de carga
- Se importa el objeto ``library`` de ``@fortawesome/fontawesome-svg-core``. Esto **permite registrar los iconos globalmente**, evitando importaciones repetidas en cada componente.
- La **función** ``Icons`` agrega todos los iconos a la biblioteca mediante ``library.add()``.
``Icons`` se exporta como **exportación por defecto**, permitiendo importarlo facilmente para inicializar la biblioteca de iconos.

# Contribución
¡Muchas gracias por querer contribuir a **AniGaua**!

Puedes contribuir de diversas maneras:
1. **Reporte de errores**
   - Si te encuentras con un **bug**, **comportamiento extraño** o **errores** de la API, puedes crear un reporte describiendo:
     - Cual fue el comportamiento
     - Como esperabas que fuese ese comportamiento
     - Que estabas haciendo
   - Puedes añadir capturas de pantalla.
2. **Contribuir con código**
    - Haz una copia del repositorio (**fork**)
    - Crea una **nueva rama** para tu contribución:
       ```bash
        git checkout -b mi-contribución
      ```
    - Sube la rama al repositorio remoto:
      ```bash
        git push origin mi-contribución 
      ```
    - Abre un **Pull Request** y describe tus cambios.
3. **Mejora de documentación**
    - Puedes añadir mejoras a la documentación.

# Licencia
Copyright 2025 Janire Martinez

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.

# Contacto
```
✉︎ Email: janiremartinez1997@gmail.com
🐙 GitHub: https://github.com/JanireMG
```
