<template>
  <div class="md-editor-container">
    <textarea name="body"></textarea>
  </div>
</template>

<script type="text/babel">
  import SimpleMDE from 'simpleMDE';
  import { merge, trim } from 'lodash';

  var oid = 0;
  var defaults = {
    inlineUploaderSettings: { // inline attachment settings
      uploadUrl: '',
      extraHeaders: {},
    },
    renderingConfig: {
      codeSyntaxHighlighting: true
    },
    spellChecker: false,
    status: false,
    toolbarTips: false,
    autosave: {
      enabled: false,
    }
  };

  export default {
    name: 'vmd-editor',
    mINSTANCE: null,
    guid: false,
    data() {
      return {
        version: '0.0.1-snapshot',
      }
    },
    computed: {},
    props: {
      settings: {
        'type': Object,
        'default': () => {
          return {};
        }
      },
      body: {
        'type': String,
        'default': ''
      },
      onChange: {
        'type': Function,
        'default': () => {}
      }
    },
    created: function() {
      this.$options.guid = ++oid;

      if (typeof SimpleMDE !== 'function') {
        throw('`SimpleMDE` not found . Please import the file which located at `./libs/simplemde.min.js` globally . And let `simpleMDE : SimpleMDE` be external with webpack configures !');
      }
    },
    methods: {
      getRawBody: function() {
        return this.$options.mINSTANCE.value();
      },
      setRawBody: function(value) {
        this.$options.mINSTANCE.value(value);
      },
      getHtmlBody: function() {
        return this.$options.mINSTANCE.markdown(this.getRawBody());
      },
      /**
       * @Todo better name ...
       * @param command
       * @param args
       */
      callAction: function(command, ...args) {
        try {
          this.$options.mINSTANCE[command].apply(this.$options.mINSTANCE, args);
        } catch (e) {
          console.warn('Call Editor Error', e);
        }
      }
    },
    ready: function() {
      const textarea = this.$el.querySelector('textarea');
      // Setup editor
      this.$nextTick(() => {
        const md = this.$options.mINSTANCE = new SimpleMDE(merge({
          element: textarea
        }, defaults, this.settings));

        // Set default value
        // @Todo after cache restored
        this.setRawBody(this.body);

        // Observe editor `change` event
        md.codemirror.on("change", () => {
          this.onChange.call(this, md);
        });
      });
    },
    destroyed: function() {
      this.$options.mINSTANCE.toTextArea();
      this.$options.mINSTANCE = null;
    },
    watch: {}
  }
</script>