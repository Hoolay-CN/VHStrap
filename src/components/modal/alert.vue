<template v-if="!byebye">
  <div class="vh-modal-alert">
    <vh-modal title="提示"
              :show="visible"
              :on-ok="onConfirm"
              :on-cancel="onCancel"
              ref="modal"
    >
      <div slot="modal-body">
        {{ message }}
      </div>
      <div slot="modal-footer">
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="cancelHandler" v-if="typeof onCancel === 'function'">取消</button>
          <button type="button" class="btn btn-hoolay" @click="okHandler">确定</button>
        </div>
      </div>
    </vh-modal>
  </div>
</template>

<script>
  import VhModal from './modal.vue';

  export default {
    name: 'VhModalAlert',

    data() {
      return {
        byebye: false,
        message: '',
        visible: false,
        onCancel: null,
        onConfirm: () => {}
      };
    },

    mounted() {
      this.$refs.modal.$on('close', () => {
        this.visible = false
      })
    },

    methods: {
      okHandler(e) {
        // call prop event handler
        let v = this.$refs.modal.internalOk(e)

        this.visible = v
      },

      cancelHandler(e) {
        // down visible & suicide self
        let v = this.$refs.modal.internalCancel(e)

        this.visible = v
      }
    },

    watch: {
      'visible'(a) {
        if (a === false) {
          // @Todo
          this.byebye = true

          // manual remove
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    },

    components: {
      VhModal
    }
  }
</script>