# ejemplo-ember-oauth
Proyecto ember autenticando contra un back con Oauth

(Text on this project is mostly in spanish)

Ejemplo de como securizar una app de ember con OAuth2 contra un server local
Tomado de [esta pagina](https://guides.emberjs.com/release/getting-started/quick-start/)
para crear la base de ember.
Y de [esta pagina](https://github.com/simplabs/ember-simple-auth) para
la configuracion de securizacion.

#### Pasos seguidos
1. Crear el repo en github con ignore y readme de base
2. Definir la version de node con un .nvmrc 
> nvm install  
> nvm use  

3. Instalar ember
> npm install -g ember-cli  

4. Crear proyecto ember
> ember new application    
> rm -fR application/.git  
> rm -f application/README.md
> mv -f application/* .
> mv -f application/.* .
> rm -fR application

5. Probar que funciona hasta aca
> ember serve  
Abrir [http://localhost:4200/](http://localhost:4200/)  

6. Quitar la pagina de welcome
7. Instalar simple auth
> ember install ember-simple-auth

8. Customizar [vista](app/templates/application.hbs) y [controller](app/controllers/application.js) de application [segun pagina](https://github.com/simplabs/ember-simple-auth#installation)
9. Usar [authenticator password](app/authenticators/oauth2.js) para autenticar
10. Crear [form de login](app/templates/login.hbs) y [su controller](app/controllers/login.js)
11. Agregar [mixin](app/routes/application.js) para ser desloguear automaticamente

12. Agregar ejemplo de [ruta protegida](app/routes/protected.js)
13. Agregar las rutas en el [router](app/router.js)

14. Agregar [authorizer](app/authorizers/oauth2.js) para decorar los request con headers de oauth
15. Asegurar requests de ember data [adapter](app/adapters/application.js)

16. Configurar endpoint de autenticacion en [authenticator](app/authenticators/oauth2.js)

### Verificar autenticacion

Authorization Code
- http://localhost:8080/oauth/authorize?grant_type=authorization_code&response_type=code&client_id=clientId&extraData=1234

Client credentials:
> curl clientId:clientSecret@localhost:8080/oauth/token -dgrant_type=client_credentials -dscope=any

Password
> curl c
