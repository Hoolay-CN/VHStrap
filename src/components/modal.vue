<template>
  <div class="modal vh-modal" v-show="visible">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="_onClose">
            <span>&times;</span>
          </button>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        <div class="modal-body">
          {{{ content }}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/babel">

  export default {
    props : {
      visible: {
        type: Boolean,
        default: false,
        twoWay: true,
      },
      title: {
        type: String,
        default: 'HOOLAY.cn'
      },
      content: {
        type: String,
        required: true
      },
      onClose: {
        type: Function
      }
    },
    methods: {
      _onClose: function() {
        this.visible = false;
        (typeof this.onClose === 'function') && this.onClose();
      }
    }
  }

</script>

<style lang="sass">
  .vh-modal.modal {
    display: block;
    background-color: rgba(0, 0, 0, .5);
    .modal-content {
      border-radius: 2px;
    }
  }
</style>