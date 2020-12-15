import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'   /* ESTA DECLARACION SE HACE LUEGO DE HEBER EJECUTADO EN CONSOLA npm add axios, pues para
la conexion a la base de datos para el logueo lo haremos con los metodos de axios */
 


// onexion con mi localhost para la union con mi backend
const base= axios.create({
	baseURL: 'https://glacial-everglades-74306.herokuapp.com'
	//baseURL: 'https://localhost:3000'
});


// Este comando tambien se usa y se vincula con la constante base que se definío en la parte de arriba	
Vue.prototype.$http= base;  

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
