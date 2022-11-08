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