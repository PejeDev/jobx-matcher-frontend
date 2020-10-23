<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="light" style="background-color:#fff">
      <b-navbar-brand href="#" class="logo">
          Job💖Matcher
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">  
          <b-navbar-nav>
            <b-nav-item style="margin-top: 5px" href="#">
              <a>✨Home</a>
            </b-nav-item>
            <b-nav-item style="margin-top: 5px" href="#">
              <a>🎉Matches</a>
            </b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <b-avatar src="https://placekitten.com/300/300" size="2rem"></b-avatar>
              <a style="margin-left: 5px">Juan Camilo C</a>
            </template>
            <b-dropdown-item href="#">👤Profile</b-dropdown-item>
            <b-dropdown-item href="#">❌Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.logo{
	font-family: 'Pacifico', cursive;
	font-weight: 400;
  font-size: 1.6rem;
  font-style: normal;
}
</style>
