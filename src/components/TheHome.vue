<template>
<div class="container">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex">
        
        <button @click="logOut" class="btn btn-outline-success" type="button">Logout</button>
      </form>
    </div>
  </div>
</nav>
<div>
	<p>
		{{ user.nombre}}
	</p>
	<p>
		{{user.email}}
	</p>

</div>

</div>
</template>


<script>
	export default {name: 'TheHome',data (){return{}}, methods:{getDetallesUsuario(){let user = localStorage.getItem('user'); let token=localStorage.getItem('jwt') ; if (token){this.user=JSON.parse(user)}}, logOut(){localStorage.removeItem("jwt");localStorage.removeItem("user") ;this.$router.push('/')}}, create(){this.getDetallesUsuario();}	}


</script>