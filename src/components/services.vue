<template>
  <div>
            <div>
              <img src="../assets/images/chef4.png" alt="chef" class="bg">
              <h1 class="services">Our Services</h1>
              <p class="pg">We provide the best services for our customer</p>
              <div class="row">
                <div class="col-ld-6 col-md-6">
                  <div class="row pad">
                    <div class="col-lg-3 col-md-3">
                      <img src="../assets/images/jollof1.png" alt="jollof" style="width: 200px">
                      <p>Jollof and fried rice with fry Chicken</p>
                    </div>
                    <div class="col-lg-3 col-md-3">
                      <img src="../assets/images/food.png.jpg" alt="food" style="width: 200px">
                      <p>Epic Spatchcocked Roast Chicken</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="row pad">
                    <div class="col-lg-3 col-md-3">
                      <img src="../assets/images/jollof3.jpg" alt="jollof3" style="width: 200px;">
                      <p>Jollof and fried rice with fry Chicken</p>
                    </div>
                    <div class="col-lg-3 col-md-3">
                      <img src="../assets/images/jollof2.png" alt="jollof3" style="width: 200px;">
                      <p>Check out our latest recipes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container content">
                  <h2 class="grill">CHEF~TEE GRILLS</h2>
                    <h2>Chicken Shawarma +2Sausage</h2>
                    <p>#1300</p>

                    <h2>Chicken, Beef Shawarma +2Sausage</h2>
                    <p>#1500</p>

                    <h2>Chicken And Chips</h2>
                    <p>#1500</p>

                    <h2>Barbeque Fish</h2>
                    <p>#1200</p>
              </div>
              <h3 class="contact">CALL TO PLACE YOUR ORDER (09057273148)</h3>
              <p class="pg">delivery is available with charges</p>
            </div>
  </div>
</template>

<script>
export default {
  name: 'services'
}
</script>

<style>
.bg {
width: 100%;
}
.services {
  text-align: center;
  font-size: x-large;
  font-weight: bolder;
}
.pg {
text-align: center;
font-family: 'Courier New', Courier, monospace;
}
.pad {
padding-left: 10%;
}
.content {
  background-color: bisque;
}
.grill {
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
    font-style:italic;
}
.contact {
  text-align: center;
}
</style>
