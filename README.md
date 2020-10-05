# PagoDiario Web (Angular)

Code Challenge para PagoDiario con el stack MEAN. El código tiene comentarios de las partes que componen la aplicación y del por que se tomaron algunas decisiones.

## Dependencias

Correr localmente el backend/API primero.

Para descargar las dependencias:

```
npm install
```

Una vez descargadas, ejecutar los siguientes comandos para hacer el build y levantar el servidor en el puerto `4200`:

```
npm start
```

La applicacion deberia de estar corriendo en: `http://localhost:4200`.

## Despliegue

Se desplegó una copia de la API en la plataforma heroku: `https://pagodiario-api.herokuapp.com/api/v1/user`

Y la aplicación frontend en un bucket de Amazon S3:
`https://s3.us-east-2.amazonaws.com/pagodiario.didi3r.net/index.html`
