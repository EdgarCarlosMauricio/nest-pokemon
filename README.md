<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar 
```
yarn install
```
3. Tener nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la BD
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar la aplicaion en dev:
```
yarn start:dev
```
8. Recostruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest

# Production Build

1. Crear el archivo ``` .env.prod ```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. La segunda vez o redesplegar
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

# Notas
Heroku redeploy sin cambios:
```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku main
```