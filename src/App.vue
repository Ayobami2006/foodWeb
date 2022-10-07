<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <header>
            <div class="bg-primary bg">
              <b-navbar toggleable="lg" type="dark" variant="info" class="bg">
                <b-navbar-brand to="images"><img src="./assets/images/logo.png.jpg" alt="" class="logo"></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item to="home">Home</b-nav-item>
                    <b-nav-item to="services">Services</b-nav-item>
                    <!-- <b-nav-item to="about us">About Us</b-nav-item> -->
                    <b-nav-item-dropdown text="About Us">
                      <b-dropdown-item to="about-us">Action</b-dropdown-item>
                      <b-dropdown-item href="#">Another action</b-dropdown-item>
                      <b-dropdown-item href="#">Somthing else here</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto search">
                    <b-nav-form form-class="btn">
                      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        <em>User</em>
                      </template>
                      <b-dropdown-item href="#">Profile</b-dropdown-item>
                      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
            </header>
    <router-view/>
    <!-- <img src="../assets/images/Products/client1.jpeg" alt="client" class="client"> -->
      <!--Footer-->
      <footer class="pt-4" style="margin-top:3%">
      <div class="bg-info">
          <div class="row">
              <div class="col-lg-9 col-md-9" style="text-align: center; color: #fff;">
                  <h1 style="font-weight: bold;">Do you want to know more or just</h1>
                  <h1 style="font-weight: bold;">have a question? write to us.</h1>
              </div>
              <div class="col-lg-3 col-md-3" style="text-align: center; margin-top: 50px;">
                  <a to="contact-us">
                      <button type="button" class="btn btn-danger" @click="goToContactUs()">contact Us</button>
                  </a>
              </div>
          </div>
          <div class="row pt-4">
              <div class="col-lg-9 col-md-9">
                  <div class="row" style="text-align: center; color: #fff">
                      <div class="col-lg-4 col-md-4">
                          <img src="./assets/images/logo.png.jpg" alt="" class="logo">
                          <h2>Get Our Mobile App</h2>
                      </div>
                      <div class="col-lg-4 col-md-4">
                          <ul style="list-style-type: none;">
                              <li>Carterin Expert</li>
                              <li>Home services</li>
                              <li>Chef Professional</li>
                              <li>Download Pojects</li>
                              <li>Purchase Our Online Foods</li>
                          </ul>
                      </div>
                      <div class="col-lg-4 col-md-4">
                          <ul style="list-style-type: none;">
                              <li>About</li>
                              <li>Services</li>
                              <li>Mellon</li>
                              <li>Food Application</li>
                              <li>Blog</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToContactUs: function () {
      this.$router.push({path: '/contact-us'})
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
