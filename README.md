# Spotiapp2022

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 95-Creando las rutas de nuestra aplicación
En esta seccion hemos agregado el archivo app.routes.ts que contendra las rutas de nuestra aplicación, tambien hemos creado el navbar de nuestro componente que lo hemos copiado de bootstrap version 4.0 y hemos hecho todas las modificaciones correspondientes en el archivo app.module.ts para la utilizacion de rutas.
## 96-Notas
Informacion sobre un API para trabajar con paises:
https://restcountries.com/
Obtener los paises que hablan español:
https://restcountries.com/v3.1/lang/spa

## 97-Introducción a las peticiones HTTP
Esta clase es de introduccion a las peticiones http y para ello 
hemos llamado a un endpoints que nos devuelve todos los paises que hablan español y lo hemos imprimido en el html del componente home.

## 98-Actualización - Token para uso de servicios Spotify
Es un video que nos muestra información de como obtener el token de spotify con nuestras credenciales y solo es válido durante una hora, por lo cual a la hora habra que renovarlo.En este video desharemos los cambios del video 97 que se utilizo para obtener los datos de los paises.

## 99-HTTPClient -Service: Conectandonos a Spotify
Hemos creado el servicio para hacer las llamadas a Spotify y hemos montado en postman el metodo para obtener el token de spotify, tambien hemos implementado en el home.component.ts la llamada al servicio para que nos devuelva los datos obtenidos de la llamada al endospoint de spotify donde obtenemos los nuevos estrenos.
 
 