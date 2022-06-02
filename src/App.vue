<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link to="/">Vue Mini Project</router-link>
    </h5>
   <nav class="my-2 my-md-0 mr-md-3">
     <router-link to="/product">Product management</router-link>
     <router-link to="/user">User management</router-link>
   </nav>
   <a class="btn btn-outline-primary" routerlink="cart">Administrator</a>
 </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
