import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let {identification, password} = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .then(()=>{
          this.set('errorMessage', 'Correctamente logueado. Anda a protected ahora');
        })
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
