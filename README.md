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

6. Instalar simple auth
> ember install ember-simple-auth

### Verificar autenticacion

Authorization Code
- http://localhost:8080/oauth/authorize?grant_type=authorization_code&response_type=code&client_id=clientId&extraData=1234

Client credentials:
> curl clientId:clientSecret@localhost:8080/oauth/token -dgrant_type=client_credentials -dscope=any

Password
> curl c
