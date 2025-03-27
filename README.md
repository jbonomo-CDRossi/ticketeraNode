# TicketeraNode

TicketeraNode es una aplicación de gestión de tickets desarrollada con Node.js, Express y Sequelize. Permite a los usuarios crear, listar, actualizar y gestionar tickets, con soporte para autenticación y autorización.

## Características

- **Gestión de Tickets**: Crear, listar, actualizar y ver detalles de tickets.
- **Autenticación**: Registro e inicio de sesión con contraseñas encriptadas.
- **API REST**: Endpoints para interactuar con los tickets desde aplicaciones externas.
- **Soporte para Google Apps Script**: Integración para enviar datos desde Google Apps Script.
- **Interfaz de Usuario**: Plantillas HTML con animaciones y estilos personalizados.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express
- **Base de Datos**: MySQL con Sequelize ORM
- **Autenticación**: JSON Web Tokens (JWT) y Passport.js
- **Frontend**: HTML5, CSS3, Bootstrap, Nunjucks
- **Integración**: Google Apps Script

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/TicketeraNode.git
   cd TicketeraNode
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la base de datos:

   - Crea una base de datos en MySQL.
   - Copia el archivo `.env.example` a `.env` y actualiza las variables de entorno con los detalles de tu base de datos.

4. Ejecuta las migraciones de Sequelize:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Inicia la aplicación:

   ```bash
   npm start
   ```

6. Abre la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).

## Uso

### API REST

- **Obtener todos los tickets**: `GET /api/tickets`
- **Crear un ticket**: `POST /api/tickets`
- **Ver detalles de un ticket**: `GET /api/tickets/:id`
- **Actualizar un ticket**: `PUT /api/tickets/:id`

### Google Apps Script

Puedes enviar datos a la API desde Google Apps Script utilizando el siguiente ejemplo:

```javascript
function sendTicketData() {
    var url = 'http://localhost:3000/api/tickets';
    var token = 'your_jwt_token';

    var payload = {
        email_creador: 'test@example.com',
        fecha_crea_t: new Date().toISOString(),
        estado: 1,
        usuario_encargado: 2,
        evidencia: 'Evidencia de prueba',
        id_r34: 'R34-12345',
        det_pedido: JSON.stringify({ item: 'Producto A', cantidad: 10 }),
        nombre_creador: 'Juan Pérez'
    };

    var options = {
        method: 'post',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        payload: JSON.stringify(payload)
    };

    var response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
}
```

## Estructura del Proyecto

```
TicketeraNode/
├── src/
│   ├── controllers/    # Controladores de la aplicación
│   ├── models/         # Modelos de Sequelize
│   ├── routes/         # Rutas de la aplicación
│   ├── views/          # Plantillas Nunjucks
│   ├── app.js          # Archivo principal de la aplicación
│   └── ...
├── public/             # Archivos estáticos (CSS, imágenes, etc.)
├── .env.example        # Archivo de ejemplo para configuración de entorno
├── package.json        # Dependencias del proyecto
└── README.md           # Documentación del proyecto
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

¡Gracias por usar TicketeraNode! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
