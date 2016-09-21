<template>
  <div class="well">
    <button class="btn btn-{{ channel }}" :disabled="isDisabled">
      {{ text }}
    </button>

    <button @click="requestData">
      {{ loading ? '正在请求...' : '提交' }}
    </button>
    <p>
      <ul>
        <li v-for="el in names">{{ el }}</li>
      </ul>
    </p>
  </div>
</template>

<script type="text/babel">
  import $ from 'jquery';
  import shuffle from 'shuffle-array';

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
      requestData: function() {
        this.loading = true;
        this.isDisabled = true;

         $.getJSON('https://api.github.com/users')
          .then((res) => {
            this.loading = false;
            this.isDisabled = false;

            this.$set('names', shuffle(res.map((it) => {
              return it.login;
            })));

          }, (err) => {
            alert(JSON.stringify(err));
          });
      }
    }
  }
</script>
