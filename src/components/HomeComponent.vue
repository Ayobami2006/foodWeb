<template>
    <div>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/chef1.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/chef2.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/chef3.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
       <div class="container pt-4">
         <h1 class="text">We Cooked Up Something New</h1>
       </div>
       <p class="text2">Check out our latest recipes, videos, and guides.</p>
              <div class="container">
      <div class="row">
            <div class="col-lg-8 col-md-8">
                <h2>Chef~Tee Kitchen</h2>
                <p>Crispy Chicken Thighs Made Simple With Sous Vide</p>
                <p>Epic Spatchcocked Roast Chicken</p>
                <p>Jollof and fried rice with fry Chicken</p>
                <p>Nooldles (Indomie, Golden-penny, Mama-gold, Minimie e.t.c) also avaliable.</p>
            </div>

              <div class="col-lg-4 col-md-4">
                <div>
                  <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                  >
                    <b-carousel-slide>
                      <template #img>
                        <img
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          src="../assets/images/jollof1.png"
                          alt="image slot"
                        >
                      </template>
                    </b-carousel-slide>
                    <b-carousel-slide>
                      <template #img>
                        <img
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          src="../assets/images/jollof2.png"
                          alt="image slot"
                        >
                      </template>
                    </b-carousel-slide>
                    <b-carousel-slide>
                      <template #img>
                        <img
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          src="../assets/images/jollof3.jpg"
                          alt="image slot"
                        >
                      </template>
                    </b-carousel-slide>
                  </b-carousel>
                  <p class="paragraph">Get your Jollof-Rice at Affordable Price</p>
                </div>
            </div>
        </div>
       </div>
         <!--CARDS-->
       <div class="container pt-4">
        <div class="card-group">
            <div class="card">
              <img src="../assets/images/Products/card1.jpeg" class="card-img-top" alt="..." style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title" style="font-weight: bold; text-align:center;">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/food.png.jpg" class="card-img-top" alt="..." style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title" style="font-weight: bold; text-align:center;">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/Products/card3.jpeg" class="card-img-top" alt="..." style="width: 50%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title" style="font-weight: bold; text-align:center;">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
      </div>

  </div>
</template>
<script>
export default {
  name: 'HomeComponent'
}
</script>

<style>
.search {
  display: flex;
  flex-direction: row;
  padding-left: 900px;
}
.btn {
  display: flex;
  flex-direction: row;
  float: left;
}
.text {
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
    font-style:italic;
}
.text2 {
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 1%;
}
.paragraph {
    font-size: larger;
    font-weight: 800%;
}
.logo {
    width: 45px;
    border-radius: 50px;
}
</style>
