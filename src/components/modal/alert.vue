<template>
  <div class="vh-modal-alert">
    <vh-modal title="提示"
              :show="visible"
              :on-ok="onConfirm"
              :on-cancel="onCancel"
              @closeTransitionEnd="suicide"
              v-if="!byebye"
              ref="modal"
    >
      <div slot="modal-body">
        {{ message }}
      </div>
      <div slot="modal-footer">
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="cancelHandler"
                  v-if="typeof onCancel === 'function'">取消
          </button>
          <button type="button" class="btn btn-hoolay" @click="okHandler">确定</button>
        </div>
      </div>
    </vh-modal>
  </div>
</template>

<script type="text/babel">
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
      // `x` action
      this.$refs.modal.$on('close', () => {
        this.visible = false
      })
    },

    methods: {
      okHandler(e) {
        // call prop event handler
        this.visible = this.$refs.modal.internalOk(e)
      },

      cancelHandler(e) {
        // down visible & suicide self
        this.visible = this.$refs.modal.internalCancel(e)
      },

      suicide() {
        // manual remove
        this.byebye = true

        this.$nextTick(() => {
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el)
        })
      }
    },

    watch: {
      'visible'(a) {
        if (a === false) {
          // @todo destroy anything
        }
      }
    },

    components: {
      VhModal
    }
  }
</script>