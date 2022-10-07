<template>
  <div>
    <div class="container content pt-4">
      <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Kwara</option>
            <option>Choose...</option>
            <option>Lagos</option>
            <option>Ogun</option>
            <option>Osun</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary button">Sign in</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactUs'
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
.logo {
    width: 45px;
    border-radius: 50px;
}
</style>
