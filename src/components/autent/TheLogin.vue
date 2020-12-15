<template>
<div class="container	">
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Submit</button>
</form>

<pre>

	{{login.email}}
	{{login.password}}
</pre>

</div>



</template>


<script>
	import swal from 'sweetalert'; /* se importa esto previo uso de npm install --save sweetalert, permite sacar
	mensajes de alerta muy cheveres, se puede verificar en package.json que realmente se haya instanciado*/
	export default {
		name: 'TheLogin',
		data (){return{
			login:{
				email:'',
				password:''
			}
		}

		},
	methods:{
		async loginUser(){
			try{
				let response = await this.$http.post('/api/usuario/login', this.login);
				console.log('response.data');
				let token = response.data.tokenReturn;
				let user=response.data.user;
				localStorage.setItem('jwt',token);
				localStorage.setItem('user', JSON.stringify(user));
				if (token){
					swal("Éxito", "Tu login fue correcto", "success");  // este es un sweetalert
					this.$router.push('/home');
				} else {
					console.log(err.response);
				}
			}
			catch (e) {
			    swal("Oops", "Nada que se conecta", "error");  // este es un sweetalert

			}
		}


	}
	}


</script>