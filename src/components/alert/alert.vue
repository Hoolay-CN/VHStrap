<template lang="html">
  <div v-show="showAlert"
       :style="{ width : width }"
       class="alert alert-{{ type }}">
    <button type="button" name="button" @click="showCtr()" class="btn btn-default">
      点击显示
    </button>
    <button type="button" class="close" data-dismiss="alert"
            @click="showAlert = false">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        showAlert: true
      }
    },
    props: {
      type: {
        type: String
      },
      width: {
        type: String
      }
    },
    methods: {
      showCtr: function () {
        this.showAlert = !this.showAlert;
      }
    }
  };
</script>

<style lang="css">
</style>
