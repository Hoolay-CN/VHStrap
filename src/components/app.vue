<template>
  <div class="app-wrap">
    <!-- button -->
    <button class="btn btn-outline-hoolay" @click="showMyModal">
      Show My Modal
    </button>
    <!-- modal -->
    <Modal title="my title" content="<h1>this is my content</h1>" :visible.sync="modalVisible" :on-close="onModalClose"></Modal>
    <!-- carousel -->
    <div class="carousel-wrap">
      <h-carousel >
        <h-slider>
          <img src="../img/1.jpg" alt="1" />
        </h-slider>
        <h-slider>
          <img src="../img/2.jpg" alt="2" />
        </h-slider>
        <h-slider>
          <img src="../img/3.jpg" alt="3" />
        </h-slider>
        <h-slider>
          <img src="../img/4.jpg" alt="4" />
        </h-slider>
      </h-carousel>
    </div>
    <!-- dropdowm   -->
    <div class="dropdown-wrap">
      <h-dropdown title="h-dropdown">
        <li role="presentation" class="dropdown-item"><a role="menuitem" href="#">Action</a></li>
        <li role="presentation" class="dropdown-item"><a role="menuitem" href="#">Another action</a></li>
        <li role="presentation" class="dropdown-item"><a role="menuitem" href="#">Something else here</a></li>
        <li role="presentation" class="dropdown-item"><a role="menuitem" href="#">Separated link</a></li>
      </h-dropdown>
    </div>
  </div>
</template>

<script type="text/babel">
  import Modal from './modal.vue';
  import hCarousel from './h-carousel.vue';
  import hSlider from './h-slider.vue';
  import hDropdown from './h-dropdown.vue';

  export default {
    data() {
      return {
        modalVisible: false
      }
    },
    methods: {
      showMyModal() {
        this.modalVisible = true;
      },
      onModalClose() {
        alert('closed modal not cancel');
      }
    },
    components: {
      Modal,
      hCarousel,
      hSlider,
      hDropdown
    }
  }
</script>

<style>
  .app-wrap {
    padding: 50px;
  }
  .carousel-wrap {
    margin-top: 20px;
    width: 730px;
    height: 454px;
  }
  .dropdown-wrap {
    margin-top: 50px;
    height: 400px;
  }
</style>
