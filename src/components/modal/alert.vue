<template>
  <div class="vh-modal-alert">
    <vh-modal title="提示"
              :show.sync="visible"
              :on-ok="onConfirm"
              :on-cancel="onCancel"
              v-ref:modal
    >
      <div slot="modal-body">
        {{ message }}
      </div>
      <div slot="modal-footer">
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="$refs.modal._cancel" v-if="typeof onCancel === 'function'">取消</button>
          <button type="button" class="btn btn-hoolay" @click="$refs.modal._ok">确定</button>
        </div>
      </div>
    </vh-modal>
  </div>
</template>

<script>
  import VhModal from './modal.vue';

  export default {
    name: 'VhAlert',

    data() {
      return {
        message: '',
        visible: false,
        onCancel: null,
        onConfirm: () => {}
      };
    },

    watch: {
      'visible'(a) {
        a === false && this.$destroy(true);
      }
    },

    components: {
      VhModal
    }
  }
</script>