<template>
  <div class="md-editor-container">
    <textarea name="body" id="md-editor-{{ uuid }}"></textarea>
  </div>
</template>

<script type="text/babel">
  import SimpleMDE from 'simpleMDE';
  import merge from 'lodash/merge';
  import trim from 'lodash/trim';

  var oid = 0;
  var defaults = {
    inlineUploaderSettings: { // inline attachment settings
      uploadUrl: '',
      extraHeaders: {
        "Authorization": '',
      },
      urlText: function(filename, result) {
        return '![' + result.originalName + '](' + filename + ')';
      }
    },
    renderingConfig: {
      codeSyntaxHighlighting: true
    },
    spellChecker: false,
    status: false,
    toolbarTips: false,
    autosave: {
      enabled: false,
      uniqueId: 'hoolay-ats-{{ entityId }}'
    }
  };

  export default {
    mINSTANCE: null,
    data() {
      return {
        version: '0.0.1-snapshot',
      }
    },
    computed: {
      uuid: {
        get: function () {
          return oid;
        }
      }
    },
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
      ++oid;
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
      console.info(`[<MdEditor> Ready]@${oid}`);

      // Setup editor
      this.$nextTick(() => {
        let md = this.$options.mINSTANCE = new SimpleMDE(merge({
          element: document.getElementById(`md-editor-${oid}`)
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

      console.info(`[<MdEditor> Destroyed]@${oid}`);
    },
    watch: {}
  }
</script>