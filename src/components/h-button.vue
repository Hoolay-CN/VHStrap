<template>
  <div class="btn-group">
    <button class="btn btn-{{ channel }}" :disabled="isDisabled" type="button">
      {{ text }}
      <slot></slot>
    </button>
    
    <!-- <button class="btn" type="button">
      {{ loading ? '正在请求...' : '提交' }}
    </button> -->
  </div>
</template>

<script type="text/babel">
  export default {
    data: () => {
      return {
        names: [],
        loading: false,
      };
    },
    props: {
      text: {
        type: String,
        required: true,
      },
      channel: {
        type: String,
        default: 'default',
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      switchChannel: function() {
        let channels = ['hoolay', 'primary', 'success', 'warning', 'info'];
        this.channel = channels[Math.floor(Math.random() * channels.length)];
      },
    }
  }
</script>
<style lang="css">
  body {
    font-size: 30px;
  }
</style>
