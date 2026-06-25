# TP2TPFinalGrupo14

API REST para gestionar bandas musicales y albumes. El proyecto usa una arquitectura MVC con rutas, controladores, servicios, modelos Sequelize y una conexion centralizada a base de datos.

## Tecnologias

- Node.js
- Express
- Sequelize
- SQLite
- dotenv

## Instalacion

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` tomando como base `.env.example`.

```env
PORT=8000
DB_STORAGE=database.sqlite
```

`PORT` define el puerto HTTP de la API. `DB_STORAGE` define el archivo SQLite que Sequelize utiliza para persistir los datos.

## Ejecucion

```bash
npm start
```

La API queda disponible en:

```text
http://localhost:8000/api
```

## Endpoints

### Bands

| Metodo | Endpoint | Descripcion |
| --- | --- | --- |
| GET | `/api/bands` | Lista todas las bandas |
| GET | `/api/bands/:id` | Obtiene una banda por id |
| POST | `/api/bands` | Crea una banda |
| PUT | `/api/bands/:id` | Actualiza una banda |
| DELETE | `/api/bands/:id` | Elimina una banda |

### Albums

| Metodo | Endpoint | Descripcion |
| --- | --- | --- |
| GET | `/api/albums` | Lista todos los albumes |
| GET | `/api/albums/:id` | Obtiene un album por id |
| POST | `/api/albums` | Crea un album |
| PUT | `/api/albums/:id` | Actualiza un album |
| DELETE | `/api/albums/:id` | Elimina un album |

## Ejemplos

### Crear una banda

Request:

```http
POST /api/bands
Content-Type: application/json
```

```json
{
  "name": "Soda Stereo",
  "genre": "Rock",
  "country": "Argentina",
  "description": "Banda argentina de rock formada en Buenos Aires."
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Soda Stereo",
    "genre": "Rock",
    "country": "Argentina",
    "description": "Banda argentina de rock formada en Buenos Aires."
  }
}
```

### Crear un album

Request:

```http
POST /api/albums
Content-Type: application/json
```

```json
{
  "title": "Cancion Animal",
  "year": 1990,
  "bandId": 1
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Cancion Animal",
    "year": 1990,
    "bandId": 1
  }
}
```

### Error de validacion

```json
{
  "success": false,
  "message": "Name and genre are required"
}
```

### Recurso no encontrado

```json
{
  "success": false,
  "message": "Band not found"
}
```
