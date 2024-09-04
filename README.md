## **Descripción del Frontend**

Este frontend está desarrollado para una aplicación de gestión de estudiantes, proporcionando una interfaz intuitiva y eficiente para la administración y visualización de datos de estudiantes.  Utiliza **React** como el framework para construir componentes reutilizables y mantener una estructura modular. La gestión del estado global se maneja con **Redux**, asegurando un flujo de datos centralizado y consistente a lo largo de la aplicación. La navegación entre vistas se gestiona a través de **React Router**, proporcionando una experiencia de usuario fluida y sin interrupciones. Las peticiones HTTP al backend se realizan con **Axios**, facilitando la comunicación efectiva para la sincronización de datos. Además, se utiliza **Material-UI** para implementar una interfaz estilizada y accesible, con componentes como botones, tablas y formularios que mejoran la usabilidad y la estética del proyecto.

--- 
### **Tecnologías Utilizadas**

**React**:
   - Framework principal para la construcción de la interfaz de usuario. Utilizado para crear componentes reutilizables y mantener una estructura modular en la aplicación.

**Redux**:
   - Implementado para gestionar el estado global de la aplicación, permitiendo un flujo de datos centralizado y la sincronización del estado entre diferentes componentes.

**React Router**:
   - Se utilizó para manejar la navegación entre diferentes páginas o vistas dentro de la aplicación, facilitando una experiencia de usuario fluida.

**Axios**:
   - Librería empleada para realizar peticiones HTTP a la API, permitiendo la comunicación con el backend para el envío y recepción de datos.

**Material-UI**:
   - Biblioteca de componentes React que se integró para construir una interfaz de usuario moderna y accesible, con elementos como botones, tablas y formularios estilizados.

---

### **1. Estructura del Proyecto**

```
src/
│
├── assets/               
│
├── components/            # Componentes reutilizables de la UI
│   ├── alertFeedback/
│   │   └── AlertFeedback.jsx
│   ├── button/
│   │   └── Options.jsx
│   ├── layout/
│   │   └── Layout.jsx
│   ├── loader/
│   │   └── Loader.jsx
│   ├── modalForm/
│   │   └── ModalForm.jsx
│   ├── navigation/
│   │   └── Navigation.jsx
│   ├── sidebarMenu/
│   │   └── SidebarMenu.jsx
│   ├── table/
│   │   └── StudentTable.jsx
│   └── text/
│       └── Text.jsx
│
├── pages/                 # Páginas principales del proyecto
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── Students.jsx
│
├── redux/                 # Lógica relacionada con Redux
│   ├── actions.js
│   ├── reducer.js
│   └── store.js
│
├── App.css                # Estilos generales
├── App.js                 # Componente raíz de la aplicación
└── index.js               # Punto de entrada de la aplicación
```

- **assets/**: Carpeta para almacenar recursos estáticos como imágenes.
- **components/**: Contiene componentes reutilizables de la interfaz de usuario (UI). Cada subcarpeta aquí representa un componente específico con su archivo JSX correspondiente.

  - **alertFeedback/**: Contiene `AlertFeedback.jsx`, un componente para mostrar notificaciones tipo "Snackbar".
  - **button/**: Contiene `Options.jsx`, un componente de botón que despliega un menú con opciones.
  - **layout/**: Contiene `Layout.jsx`, un componente para definir la estructura general de la página con un contenedor y un menú lateral.
  - **loader/**: Contiene `Loader.jsx`, un componente que muestra un indicador de carga.
  - **modalForm/**: Contiene `ModalForm.jsx`, un formulario modal para crear o editar datos de estudiantes.
  - **navigation/**: Contiene `Navigation.jsx`, un componente para la navegación.
  - **sidebarMenu/**: Contiene `SidebarMenu.jsx`, un componente que representa el menú lateral.
  - **table/**: Contiene `StudentTable.jsx`, un componente de tabla para mostrar datos de estudiantes.
  - **text/**: Contiene `Text.jsx`, un componente para manejar texto.

- **pages/**: Carpeta que contiene las páginas principales del proyecto.

  - **Login.jsx**: Página de inicio de sesión.
  - **NotFound.jsx**: Página de error 404.
  - **Students.jsx**: Página principal que muestra la lista de estudiantes.

- **redux/**: Contiene la lógica de Redux para manejar el estado global de la aplicación.

  - **actions.js**: Define las acciones que se pueden realizar en la aplicación.
  - **reducer.js**: Define cómo cambia el estado en respuesta a las acciones.
  - **store.js**: Configura el store de Redux.

- **App.css**: Archivo de estilos generales.
- **App.js**: Componente raíz de la aplicación.
- **index.js**: Punto de entrada de la aplicación.

### **2. Detalle de Componentes**

#### **AlertFeedback.jsx**

Este componente se utiliza para mostrar notificaciones tipo "Snackbar" en respuesta a acciones de la aplicación, como el éxito o fallo en la obtención de datos.

- **Hooks**:

  - `useState`: Maneja el estado de apertura y cierre del Snackbar.
  - `useEffect`: Detecta cambios en `fetchMessage` para mostrar el Snackbar con la severidad adecuada.
  - `useSelector`: Selecciona datos del estado global (`isFetchSuccess` y `fetchMessage`).

- **Funcionamiento**:
  - Se abre el Snackbar cuando `fetchMessage` no es `null`.
  - El `severity` (nivel de severidad) se establece en función de `isFetchSuccess`.

#### **Options.jsx**

Este componente es un botón que despliega un menú con opciones como ver, editar y eliminar un estudiante.

- **Hooks**:

  - `useState`: Maneja el estado de los menús y diálogos.
  - `useDispatch` y `useSelector`: Para interactuar con Redux.

- **Funcionamiento**:
  - Maneja la apertura y cierre del menú y diálogos de confirmación.
  - Despacha acciones de Redux para obtener detalles, editar o eliminar estudiantes.

#### **Layout.jsx**

El componente `Layout` estructura la página con un contenedor y un menú lateral (`SidebarMenu`).

- **Props**:
  - `children`: Componentes hijos que se renderizan dentro del layout.

#### **Loader.jsx**

Este componente muestra un indicador de carga (`CircularProgress`) cuando una operación está en proceso (`fetchInProcess`).

- **Hooks**:
  - `useSelector`: Para obtener el estado `fetchInProcess` desde Redux.

#### **ModalForm.jsx**

Un formulario modal para crear o editar estudiantes. Usa `react-hook-form` para manejar la validación y control del formulario.

- **Hooks**:

  - `useForm`: Maneja el control del formulario y la validación.
  - `useDispatch` y `useSelector`: Para interactuar con Redux.

- **Funcionamiento**:
  - El formulario se reinicia en función del modo (`create`, `edit`, `read`).
  - Se despachan acciones para crear o actualizar estudiantes y cerrar el modal.

### **Navigation.jsx**

El componente `Navigation` maneja la barra de navegación superior de la aplicación.

- **Props**:
  - `onToggleSidebar`: Función para alternar la visibilidad del `SidebarMenu`.
- **Funcionamiento**:
  - Contiene un ícono de menú que, al ser clicado, ejecuta `onToggleSidebar` para mostrar u ocultar el `SidebarMenu`.

### **SidebarMenu.jsx**

`SidebarMenu` es el componente que representa el menú lateral de la aplicación. Este menú permite la navegación a diferentes secciones de la aplicación.

- **Props**:
  - `open`: Indica si el menú está visible o no.
- **Funcionamiento**:
  - Contiene enlaces de navegación a diferentes rutas de la aplicación.
  - Se muestra o se oculta según el valor de la prop `open`.
  - Implementa una estructura colapsable para optimizar el espacio y mantener el menú ordenado.

### **StudentTable.jsx**

Este componente muestra una tabla de estudiantes con opciones para ver, editar y eliminar cada entrada.

- **Props**:
  - `students`: Array de objetos que representa la lista de estudiantes a mostrar en la tabla.
- **Funcionamiento**:
  - Mapea a través del array `students` para generar filas en la tabla.
  - Cada fila tiene botones de acción (ver, editar, eliminar) que interactúan con el componente `Options`.

### **Text.jsx**

El componente `Text` es un componente reutilizable para manejar el texto en la aplicación. Permite aplicar estilos y manejar casos de texto especial.

- **Props**:
  - `variant`: Define el tipo de texto para establecer la jerarquía visual.
  - `className`: Permite agregar clases CSS adicionales para el estilado.
- **Funcionamiento**:
  - Renderiza el texto en el formato especificado por `variant`.
  - Permite aplicar estilos personalizados
  - Facilita la gestión de texto en diferentes partes de la aplicación con un enfoque consistente.

---

### **3. Redux: Manjo Estado Global**

#### **3.1. `actions.js`**

- **Descripción**:
  Define las acciones que representan los eventos que pueden ocurrir en la aplicación, permitiendo la comunicación entre los componentes y el store de Redux.

- **Acciones Principales**:
  - `FETCH_REQUEST`: Indica el inicio de una solicitud para obtener datos.
  - `FETCH_SUCCESS`: Se despacha cuando la solicitud es exitosa y contiene un mensaje.
  - `FETCH_FAILURE`: Se despacha cuando la solicitud falla y contiene un mensaje de error.
  - `GET_ALL_STUDENTS`: Almacena la lista de estudiantes obtenida.
  - `GET_STUDENT_BY_ID`: Almacena los datos del estudiante seleccionado por ID.
  - `SHOW_MODAL_DETAIL`: Controla la visibilidad del modal detallado.
  - `SET_MODAL_MODE`: Establece el modo del modal (crear, editar, etc.).
  - `UPDATE_STUDENT`: Acción para actualizar un estudiante.
  - `CREATE_STUDENT`: Acción para crear un nuevo estudiante.
  - `DELETE_STUDENT`: Acción para eliminar un estudiante.
  - `RESET_STUDENT_INFO`: Limpia la información del estudiante seleccionado.

- **Código**:
  ```javascript
  import axios from "axios";

  // Definición de tipos de acciones
  export const FETCH_REQUEST = "FETCH_REQUEST";
  export const FETCH_SUCCESS = "FETCH_SUCCESS";
  export const FETCH_FAILURE = "FETCH_FAILURE";
  export const SET_MODAL_MODE = "SET_MODAL_MODE";
  export const SHOW_MODAL_DETAIL = "SHOW_MODAL_DETAIL";
  export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
  export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
  export const UPDATE_STUDENT = "UPDATE_STUDENT";
  export const CREATE_STUDENT = "CREATE_STUDENT";
  export const DELETE_STUDENT = "DELETE_STUDENT";
  export const RESET_STUDENT_INFO = "RESET_STUDENT_INFO";

  // URL base para las peticiones API
  const apiURL = "https://nice-sand-0d8b39c1e.5.azurestaticapps.net";

  // Acción para obtener todos los estudiantes
  export const getAllStudents = () => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST }); // Indica que la solicitud ha comenzado
    try {
      const response = await axios.get(`${apiURL}/api/Student`);
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({ type: FETCH_SUCCESS, payload: response?.data?.message }); // Solicitud exitosa
        dispatch({ type: GET_ALL_STUDENTS, payload: response?.data?.data }); // Almacena la lista de estudiantes
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error en la conexión";
      dispatch({ type: FETCH_FAILURE, payload: errorMessage }); // Manejo de errores
    }
  };

  // Acción para obtener un estudiante por ID
  export const getStudentById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST }); // Indica que la solicitud ha comenzado
    try {
      const response = await axios.get(`${apiURL}/api/Student/${id}`);
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({ type: FETCH_SUCCESS, payload: response?.data?.message }); // Solicitud exitosa
        dispatch({ type: GET_STUDENT_BY_ID, payload: response?.data?.data }); // Almacena los datos del estudiante seleccionado
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error en la conexión";
      dispatch({ type: FETCH_FAILURE, payload: errorMessage }); // Manejo de errores
    }
  };

  // Acción para actualizar un estudiante
  export const updateStudent = (id, data) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST }); // Indica que la solicitud ha comenzado
    try {
      const response = await axios.put(`${apiURL}/api/Student/${id}`, data);
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({ type: FETCH_SUCCESS, payload: response?.data?.message }); // Solicitud exitosa
        dispatch({ type: UPDATE_STUDENT }); // Indica que el estudiante ha sido actualizado
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error en la conexión";
      dispatch({ type: FETCH_FAILURE, payload: errorMessage }); // Manejo de errores
    }
  };

  // Acción para crear un nuevo estudiante
  export const createStudent = (data) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST }); // Indica que la solicitud ha comenzado
    try {
      const response = await axios.post(`${apiURL}/api/Student`, data);
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({ type: FETCH_SUCCESS, payload: response?.data?.message }); // Solicitud exitosa
        dispatch({ type: CREATE_STUDENT }); // Indica que el estudiante ha sido creado
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error en la conexión";
      dispatch({ type: FETCH_FAILURE, payload: errorMessage }); // Manejo de errores
    }
  };

  // Acción para eliminar un estudiante
  export const deleteStudent = (id) => async (dispatch) => {
    dispatch({ type: FETCH_REQUEST }); // Indica que la solicitud ha comenzado
    try {
      const response = await axios.delete(`${apiURL}/api/Student/${id}`);
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({ type: FETCH_SUCCESS, payload: response?.data?.message }); // Solicitud exitosa
        dispatch({ type: DELETE_STUDENT }); // Indica que el estudiante ha sido eliminado
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error en la conexión";
      dispatch({ type: FETCH_FAILURE, payload: errorMessage }); // Manejo de errores
    }
  };

  // Acción para controlar la visibilidad del modal detallado
  export const showModalDetail = (action) => (dispatch) => {
    dispatch({ type: SHOW_MODAL_DETAIL, payload: action });
  };

  // Acción para establecer el modo del modal (crear, editar, etc.)
  export const setModalMode = (mode) => (dispatch) => {
    dispatch({ type: SET_MODAL_MODE, payload: mode });
  };

  // Acción para limpiar la información del estudiante seleccionado
  export const resetStudentInfo = () => (dispatch) => {
    dispatch({ type: RESET_STUDENT_INFO });
  };
  ```

#### **3.2. `reducer.js`**

- **Descripción**:
  Administra cómo se actualiza el estado global en respuesta a las acciones despachadas. El reducer maneja diferentes tipos de acciones para actualizar el estado de los estudiantes, la visibilidad del modal, y el estado de las solicitudes.

- **Estado Global**:
  - `studentList`: Lista de todos los estudiantes.
  - `studentSelected`: Datos del estudiante seleccionado.
  - `fetchInProcess`: Indica si una solicitud de datos está en curso.
  - `isFetchSuccess`: Indica si la solicitud de datos fue exitosa.
  - `fetchMessage`: Mensaje de éxito o error de la solicitud.
  - `showModalDetail`: Controla la visibilidad del modal detallado.
  - `modalMode`: Modo actual del modal (crear, editar, etc.).

- **Código**:
  ```javascript
  import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    GET_ALL_STUDENTS,
    GET_STUDENT_BY_ID,
    SHOW_MODAL_DETAIL,
    RESET_STUDENT_INFO,
    SET_MODAL_MODE,
    UPDATE_STUDENT,
    CREATE_STUDENT,
    DELETE_STUDENT
  } from "./actions";

  // Estado inicial del store
  const initialState = {
    studentList: [], // Lista de estudiantes
    studentSelected: [], // Información del estudiante seleccionado
    fetchInProcess: false, // Indica si una solicitud está en curso
    isFetchSuccess: false, // Indica si la solicitud fue exitosa
    fetchMessage: null, // Mensaje de éxito o error
    showModalDetail: false, // Controla la visibilidad del modal
    modalMode: null, // Modo actual del modal
  };

  // Reducer principal que maneja el estado global
  export function rootReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_REQUEST:
        return {
          ...state,
          fetchInProcess: true, // Solicitud en curso
          isFetchSuccess: false,
          fetchMessage: null,
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          fetchInProcess: false, // Solicitud completada
          isFetchSuccess: true,
          fetchMessage: action.payload, // Mensaje de éxito
        };
      case FETCH_FAILURE:
        return {
          ...state,
          fetchInProcess: false, // Solicitud completada con error
          isFetchSuccess: false,
          fetchMessage: action.payload, // Mensaje de error
        };
      case GET_ALL_STUDENTS:
        return {
          ...state,
          studentList: action.payload, // Actualiza la lista de estudiantes
        };
      case GET_STUDENT_BY_ID:
        return {
          ...state,
          studentSelected: action.payload, // Actualiza la información del estudiante seleccionado
        };
      case SHOW_MODAL_DETAIL:
        return {
          ...state,
          showModalDetail: action.payload, // Controla la visibilidad del modal
        };
      case SET_MODAL_MODE:
        return {
          ...state,
          modalMode: action.payload, // Establece el modo del modal
        };
      case UPDATE_STUDENT:
        return {
          ...state,
        };
      case CREATE_STUDENT:
        return {
          ...state,
        };
      case DELETE_STUDENT:
        return {
          ...state,
        };
      case RESET_STUDENT_INFO:
        return {
          ...state,
          studentSelected: [], // Limpia la información del estudiante seleccionado
        };
      default:
        return state;
    }
  }
  ```

#### **3.3. `store.js`**

- **Descripción**:
  Configura el store de Redux, que mantiene el estado global de la aplicación y aplica middleware necesario para la gestión de acciones asíncronas.

- **Código**:
  ```javascript
  import { createStore, applyMiddleware } from "redux";
  import thunk from "redux-thunk"; // Middleware para manejar acciones asíncronas
  import { rootReducer } from "./reducer"; // Importa el reducer principal

  // Crea el store de Redux con el reducer y middleware
  const store = createStore(rootReducer, applyMiddleware(thunk));

  export default store;
  
  ```
  
  ## Instalación

Sigue los siguientes pasos para levantar el frontend localmente en tu máquina:

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/MarcoAlayn/students-crud-client.git
   cd tesla-landing-ia
   ```

2. **Instalar Dependencias**

   Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Luego, ejecuta:

   ```bash
   npm install
   ```

3. **Correr la Aplicación**

   Una vez instaladas las dependencias, puedes correr la aplicación con:

   ```bash
   npm start
   ```

   Esto abrirá la aplicación en tu navegador por defecto en `http://localhost:3000`.

---

