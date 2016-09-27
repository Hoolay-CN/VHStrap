<template>
  <div class="app-wrap">
     <!--button -->
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
				<h-sub-drop>
					<a href="#">Action</a>
				</h-sub-drop>
				<h-sub-drop>
					<a href="#">Another action</a>
				</h-sub-drop>
				<h-sub-drop>
					<a href="#">Something else here</a>
				</h-sub-drop>
				<h-sub-drop>
					<a href="#">Separated link</a>
				</h-sub-drop>
      </h-dropdown>
    </div>
  </div>

	<!--input-->
	<div class="input-wrap">
		<h-input placeholder="在此输入姓名" show-itle="true" input-title="$$$"></h-input>
	</div>

</template>


<script type="text/babel">
  import Modal from './modal.vue';
  import hCarousel from './Carousel.vue';
  import hSlider from './Slider.vue';
  import hDropdown from './Dropdown.vue';
	import hSubDrop from './subDrop.vue';
	import hInput from './Input.vue';

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

			hSubDrop,
      hDropdown,

			hInput
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
    height: 100px;
  }
	.input-wrap {
		width: 300px;
		margin-bottom: 30px;
	}
</style>
