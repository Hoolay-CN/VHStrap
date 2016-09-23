<template>
  <div class="app-wrap">
    <button class="btn btn-outline-hoolay" @click="showMyModal">
      Show My Modal
    </button>
    <Modal title="my title" content="<h1>this is my content</h1>" :visible.sync="modalVisible" :on-close="onModalClose"></Modal>
  </div>
</template>

<script type="text/babel">
  import Modal from './modal.vue';

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
    }
  }
</script>

<style>
  .app-wrap {
    padding: 50px;
  }
</style>
